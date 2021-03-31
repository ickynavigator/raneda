import { useEffect } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductTwo from "../components/ProductTwo";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listTopProducts } from "../actions/productActions";
import Meta from "../components/Meta";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return (
    <>
      <Meta />

      <div className="first-layer">
        <div className="new-bonnets">NEW BONNETS</div>
        <div>
          <Image
            src="\uploads\images\ranedaimg\GROUP_BONNET_PICTURE.png"
            alt=""
            className="layer-image"
            fluid
          />
        </div>
      </div>
      <div className="second-layer">
        <div className="second-header">GET YOUR NAMES ON YOUR BONNETS</div>

        <div className="cardItem">
          <Container className="d-flex justify-content-center align-items-center">
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Row className="justify-content-center align-items-center">
                {products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <ProductTwo product={product} />
                  </Col>
                ))}
              </Row>
            )}
          </Container>
        </div>

        <div className="getyours">
          <Link to="/shop">
            <Button type="button" className="btn my-3">
              GET YOURS NOW
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
