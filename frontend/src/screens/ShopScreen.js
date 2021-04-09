import { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";
import Paginate from "../components/Paginate";
import Meta from "../components/Meta";
import SearchBox from "../components/SearchBox";
import { useLocation } from "react-router";

const ShopScreen = ({ history, location }) => {
  const dispatch = useDispatch();
  let pathname = location.pathname.substr(1);

  const search = useLocation().search;
  const keyword = new URLSearchParams(search).get("keyword") || "";
  const filter = new URLSearchParams(search).get("filter") || "";
  const pageNumber = new URLSearchParams(search).get("pageNumber") || 1;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;

  const [filterState, setFilterState] = useState(filter);

  useEffect(() => {
    const filterProducts = () => {
      const pageNumString = pageNumber > 1 ? `&page=${pageNumber}` : "";
      const keywordString = keyword.length > 0 ? `&keyword=${keyword}` : "";
      const newUrl = `${pathname}?filter=${filterState}${pageNumString}${keywordString}`;
      history.push(newUrl);
    };

    if (filterState.length > 1) {
      filterProducts(filterState);
    }
    dispatch(listProducts(keyword, pageNumber, filter));
  }, [dispatch, keyword, pageNumber, filterState, history, pathname, filter]);

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
            <Col className="d-flex justify-content-start align-items-center">
              <SearchBox history={history} location={location} />
            </Col>
            <Col className="d-flex justify-content-end">
              <Form.Group>
                <Form.Label>SORT BY:</Form.Label>
                <Form.Control
                  as="select"
                  value={filterState}
                  onChange={(e) => setFilterState(e.target.value)}
                >
                  <option key="featured" value="featured">
                    Featured
                  </option>
                  <option key="newest" value="newest">
                    Newest
                  </option>
                  <option key="priceLH" value="priceLH">
                    Price: Low to High
                  </option>
                  <option key="priceHL" value="priceHL">
                    Price: High to Low
                  </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Container>
        {/* <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          // size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Sorting
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Newest</ListGroup.Item>
            </ListGroup>
          </Modal.Body>
        </Modal> */}
        {/* <sortSelector show={modalShow} onHide={() => setModalShow(false)} /> */}
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
