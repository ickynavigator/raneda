import { useEffect } from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Container>
        <h1>NEW BONNETS</h1>
      </Container>
      <Container>
        <h2>GET YOUR NAMES ON YOUR BONNETS</h2>
        <Container>
          {loading ? (
            <Loader></Loader>
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          )}
          <Button type="submit" variant="primary">
            SHOP NOW
          </Button>
          {/* {!userInfo && (<Container></Container>)} */}
          <h3>Sign Up for our Newsletter</h3>
          <h4>GET EXCLUSIVE DEALS, DISCOUNTS AND OFFERS VIA EMAIL</h4>
        </Container>
      </Container>
    </>
  );
};

export default HomeScreen;
