import { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  listProductDetails,
  createProductReview,
} from "../actions/productActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../constants/productConstants";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";

const ProductTwoScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successproductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successproductReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match, successproductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createProductReview(match.params.id, { rating, comment }));
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <img src={product.image} alt={product.name} />
          </Col>
          <Col>
            <Row>{product.name}</Row>
            <Row>{product.price}</Row>
            {product.color && (
              <Row>
                <Form.Control
                  as="select"
                  placeHolder="Pick a Color"
                  value={product.colors}
                  onChange={(e) => setColor(e.target.value)}
                >
                  {product.color.map((x) => (
                    <option key={x} value={x}>
                      {x}
                    </option>
                  ))}
                </Form.Control>
              </Row>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductTwoScreen;
