// import axios from "axios";
import { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentScreen = ({ history }) => {
  const dispatch = useDispatch();
  // const orderId = match.params.id;

  // const [sdkReady, setSdkReady] = useState(false);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  // const orderDetails = useSelector((state) => state.orderDetails);
  // const { order, error, loading } = orderDetails;

  // const orderPay = useSelector((state) => state.orderPay);
  // const { loading: loadingPay, success: successPay } = orderPay;

  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  if (!shippingAddress) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("");

  // const successPaymentHandler = (paymentResult) => {
  //   dispatch(payOrder(orderId, { ...paymentResult, paymentMethod }));
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentAddress(paymentMethod));
    history.push("/placeorder");
  };

  // const paySwitch = (val) => {
  //   switch (val) {
  //     case "accountNum":
  //       return <AcctNum />;
  //     case "paypal":
  //       return (
  //         <Paypalfunc
  //           sdkReady={sdkReady}
  //           amount={order.totalPrice}
  //           handler={successPaymentHandler}
  //         />
  //       );
  //     case "flutterwave":
  //       const flutterinfo = async () => {
  //         const { data: clientId } = await axios.get("/api/config/flutterwave");
  //         const flutterdata = {
  //           pub_key: clientId,
  //           tx_ref: Date.now(),
  //           amount: order.totalPrice,
  //           currency: "ngn",
  //           customer: {
  //             email: userInfo.email,
  //             // phonenumber: userInfo.phonenum,
  //             name: userInfo.name,
  //           },
  //         };
  //         return flutterdata;
  //       };
  //       return <Flutterwavefunc info={flutterinfo()} />;
  //     default:
  //       return <p>{/* <LinkContainer></LinkContainer> */}</p>;
  //   }
  // };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="Paypal"
              name="paymentMethod"
              value="Paypal"
              disabled
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Col>
            <Form.Check
              type="radio"
              label="Pay with Flutterwave"
              id="Flutterwave"
              name="paymentMethod"
              value="Flutterwave"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>

          <Col>
            <Form.Check
              type="radio"
              label="Pay with Account Number"
              id="AccountNum"
              name="paymentMethod"
              value="AccountNum"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
      {/* <Row>
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
                <ListGroup.Item>
                  {loadingPay && <Loader />}
                  {paySwitch(paymentMethod)}
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row> */}
    </FormContainer>
  );
};

export default PaymentScreen;
