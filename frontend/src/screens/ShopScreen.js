import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";

const ShopScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  const productWithDiscount = [];
  products.map((x) => productWithDiscount.push({ ...x, discount: 25 }));
  console.table(productWithDiscount);
  return (
    <>
      <Meta />
      <div className="discount-card-section">
        <Container fluid>
          <Row>
            <Col>
              <div className="test">
                <div className="discount-text1">RANEDA MONTHLY SALE</div>
                <div className="discount-text2">25% OFF!!</div>
                <div className="discount-text3">ALL BONNETS</div>
                {/* <div className="discount-text4">
                  PLUS NEW EXCLUSIVES ON OUR NEWSLETTER
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="filter-bar">
        <Container fluid>
          <Row>
            <Col>
              <div className="text-1">SHOP ALL</div>
            </Col>
            <Col>
              <div className="text-2">SORT</div>
            </Col>
          </Row>
        </Container>
      </div>

      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map(
            (product) =>
              product.toShow && (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              )
          )}
        </Row>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
    </>
  );
};

export default ShopScreen;