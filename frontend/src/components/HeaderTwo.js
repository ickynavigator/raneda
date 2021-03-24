// import { Route } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../actions/userActions";
// import SearchBox from "./SearchBox";

const list = {
  color: "red",
  textDecoration: "none",
  textAlign: "center",
};
const listitem = {
  color: "black",
  textDecoration: "none",
  font: "normal normal 9.65802px/11px Raleway",
  letterSpacing: "0.505em",
};

const Header = ({ location }) => {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   window.location.reload();
  // };

  return (
    <Nav>
      <Container>
        <Row>
          <div className="raneda-text col align-self-center">RANEDA</div>
        </Row>

        <Row>
          <Col className="user-icon">
            <i className="far fa-user"></i>
          </Col>

          <Col className="hairMakeup">Hair and Makeup</Col>

          <Col className="shopping-cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col style={list}>
            <Link to="/contact" style={listitem}>
              CONTACT
            </Link>
            {/* <a href="/" style={listitem}>
              CONTACT
            </a> */}
          </Col>

          <Col style={list}>
            <Link to="/shop" style={listitem}>
              SHOP
            </Link>
          </Col>

          <Col style={list}>
            <Link to="/services" style={listitem}>
              SERVICES
            </Link>
          </Col>
        </Row>
      </Container>
    </Nav>
  );
};

export default Header;

// <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
//     <Container>
//       <LinkContainer to="/">
//         <Navbar.Brand>Home</Navbar.Brand>
//       </LinkContainer>

//       <Navbar.Toggle aria-controls="basic-navbar-nav" />

//       <Navbar.Collapse id="basic-navbar-nav">
//         {/* <Route render={({ history }) =><SearchBox history={history} />} /> */}
//         <Nav className="ml-auto">
//           <LinkContainer to="/cart">
//             <Nav.Link>
//               <i className="fas fa-shopping-cart"></i>Cart
//             </Nav.Link>
//           </LinkContainer>

//           {userInfo ? (
//             <NavDropdown title={userInfo.name} id="username">
//               <LinkContainer to="/profile">
//                 <NavDropdown.Item>Profile</NavDropdown.Item>
//               </LinkContainer>
//               <NavDropdown.Item onClick={logoutHandler}>
//                 Logout
//               </NavDropdown.Item>
//             </NavDropdown>
//           ) : (
//             <LinkContainer to="/login">
//               <Nav.Link>
//                 <i className="fas fa-user"></i>Sign In
//               </Nav.Link>
//             </LinkContainer>
//           )}

//           {userInfo && userInfo.isAdmin && (
//             <NavDropdown title="Admin Menu" id="adminmenu">
//               <LinkContainer to="/admin/userlist">
//                 <NavDropdown.Item>Users</NavDropdown.Item>
//               </LinkContainer>
//               <LinkContainer to="/admin/productlist">
//                 <NavDropdown.Item>Products</NavDropdown.Item>
//               </LinkContainer>
//               <LinkContainer to="/admin/orderlist">
//                 <NavDropdown.Item>Orders</NavDropdown.Item>
//               </LinkContainer>
//             </NavDropdown>
//           )}
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
