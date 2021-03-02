import { Row, Col, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const RowStyle1 = {
  display: "flex",
  flexDirection: "row",
};

const BodyLayer1 = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const ButtonStyle = {
  background: "#FFFFFF",
  border: "7px solid #835858",
  boxSizing: "border-box",
  fontFamily: "Raleway, sans-serif",
  //   boxShadow: "12px 14px 0px 1px rgba(0, 0, 0, 0.25)",
};

const imgStyle = {
  //   height: "400px",
  //   width: "500px",
  width: "calc(100vw/3.137)",
  height: "calc(100vh/1.589)",
};

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row style={RowStyle1}>
          <div>
            <img src="/images/IMG_4190.jpeg" alt="Ameerah" style={imgStyle} />
          </div>
          <Col style={BodyLayer1}>
            <h1
              className="text-center"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Our Products
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quas vitae saepe ut quo ad officia. Tenetur ab
              laboriosam perspiciatis voluptatem maiores unde et tempore,
              voluptas vero quaerat officia qui animi hic molestias laudantium
              quas ut sint autem cupiditate eaque alias quis. Nobis, quia id.
              Natus illum dolorum ipsam cupiditate.
            </p>
            <Link to="/shop">
              <Button variant="light" style={ButtonStyle}>
                Shop
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col style={BodyLayer1}>
            <h1
              className="text-center"
              style={{ fontFamily: "'Josefin Sans', sans-serif" }}
            >
              Why Us?
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, quas vitae saepe ut quo ad officia. Tenetur ab
              laboriosam perspiciatis voluptatem maiores unde et tempore,
              voluptas vero quaerat officia qui animi hic molestias laudantium
              quas ut sint autem cupiditate eaque alias quis. Nobis, quia id.
              Natus illum dolorum ipsam cupiditate.
            </p>
          </Col>
          <div>
            <img
              src="/images/IMG_4190.jpeg"
              alt="Raneda Hair"
              style={imgStyle}
            />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
