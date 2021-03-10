import axios from "axios";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../actions/orderActions";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../constants/orderConstants";
import {
  addPayPalScript,
  Paypalfunc,
  Flutterwavefunc,
  PayButt,
  DeliverButt,
  AcctNum,
} from "../components/PaymentComponent";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // const cart = useSelector((state) => state.cart);
  // const { paymentMethod } = cart;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver;

  useEffect(() => {
    // addPayPalScript(setSdkReady);

    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      // if (!window.paypal) {
      //   addPayPalScript(setSdkReady);
      // } else {
      //   setSdkReady(true);
      // }
    }
  }, [dispatch, order, orderId, successPay, successDeliver]);

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, { ...paymentResult, paymentMethod }));
  };

  const adminDeliverHandler = () => {
    dispatch(deliverOrder(order));
  };

  const adminPayHandler = () => {
    const paymentResult = {
      // id: ,
      // status: ,
      // update_time: Date.now(),
      // email_address: ,
      // link: e
    };
    dispatch(payOrder(orderId, paymentResult));
  };

  const paySwitch = (val) => {
    setPaymentMethod(val);
    // const node = paySwitchOut(val);
    // document.getElementById("payOut").appendChild(node);
    ReactDOM.render(paySwitchOut(val), document.getElementById("payOut"));
  };

  const paySwitchOut = (val) => {
    switch (val) {
      case "AccountNum":
        return <AcctNum />;
      case "Paypal":
        return (
          <Paypalfunc
            sdkReady={sdkReady}
            amount={order.totalPrice}
            handler={successPaymentHandler}
          />
        );
      case "Flutterwave":
        const flutterinfo = async () => {
          const { data: clientId } = await axios.get("/api/config/flutterwave");
          const flutterdata = {
            pub_key: clientId,
            tx_ref: Date.now(),
            amount: order.totalPrice,
            currency: "ngn",
            customer: {
              email: userInfo.email,
              // phonenumber: userInfo.phonenum,
              name: userInfo.name,
            },
          };
          return flutterdata;
        };
        return <Flutterwavefunc info={flutterinfo()} />;
      default:
        return <></>;
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong> {order.user.name}
              </p>
              <p>
                <strong>Email:</strong>
                <a href={`mailto:${order.user.email}`}> {order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              <p>
                <strong>Number:</strong>
                {order.shippingAddress.phoneNum}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          ></Image>
                        </Col>

                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {!order.isPaid && (
                <>
                  <ListGroup.Item>
                    <h1>Payment Method</h1>
                    <Form
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <Form.Group controlId="address">
                        <Form.Label as="legend">Select Method</Form.Label>

                        <Col>
                          <Form.Check
                            type="radio"
                            label="Paypal or Credit Card"
                            id="Paypal"
                            name="paymentMethod"
                            value="Paypal"
                            disabled="false"
                            onChange={(e) => paySwitch(e.target.value)}
                          ></Form.Check>
                        </Col>

                        <Col>
                          <Form.Check
                            type="radio"
                            label="Pay with Flutterwave"
                            id="Flutterwave"
                            name="paymentMethod"
                            value="Flutterwave"
                            onChange={(e) => paySwitch(e.target.value)}
                          ></Form.Check>
                        </Col>

                        <Col>
                          <Form.Check
                            type="radio"
                            label="Pay with Account Number"
                            id="AccountNum"
                            name="paymentMethod"
                            value="AccountNum"
                            onChange={(e) => paySwitch(e.target.value)}
                          ></Form.Check>
                        </Col>
                      </Form.Group>
                    </Form>
                  </ListGroup.Item>

                  {paymentMethod && (
                    <ListGroup.Item>
                      {loadingPay && <Loader />}
                      <div id="payOut"></div>
                    </ListGroup.Item>
                  )}
                </>
              )}

              {loadingDeliver && <Loader />}
              {userInfo &&
                userInfo.isAdmin &&
                (!order.isPaid ? (
                  <>
                    <PayButt handler={adminPayHandler} />
                  </>
                ) : (
                  !order.isDelivered && (
                    <>
                      <DeliverButt handler={adminDeliverHandler} />
                    </>
                  )
                ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
