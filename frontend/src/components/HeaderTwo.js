// import { Route } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { logout } from "../actions/userActions";
// import SearchBox from "./SearchBox";

const Header = ({ location }) => {
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;

  // const dispatch = useDispatch();

  // const logoutHandler = () => {
  //   dispatch(logout());
  //   window.location.reload();
  // };

  return (
    <Nav as="header" className="header">
      <Container>
        <Row>
          <Col className="user-icon">
            <i className="far fa-user"></i>
          </Col>

          <Col>
            <div className="logo-container">
              <Link to="">
                <img
                  src="\uploads\ranedaimg\RanedaLogo Isolated.png"
                  alt=""
                  className="logo"
                />
              </Link>
            </div>
          </Col>

          <Col className="shopping-cart">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col className="list">
            <Link to="/contact" className="an">
              CONTACT
            </Link>
          </Col>

          <Col className="list">
            <Link to="/shop" className="an">
              SHOP
            </Link>
          </Col>

          <Col className="list">
            <Link to="/services" className="an">
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

// const list = {
//   color: "red",
//   textDecoration: "none",
//   textAlign: "center",
// };
// const listitem = {
//   color: "black",
//   textDecoration: "none",
//   font: "normal normal 9.65802px/11px Raleway",
//   letterSpacing: "0.505em",
// };
// <a href="/" style={listitem}>
//    CONTACT
// </a>
