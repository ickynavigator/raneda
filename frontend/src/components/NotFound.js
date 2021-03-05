import Message from "./Message";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NotFound = () => {
  return (
    <>
      <Card className="d-flex justify-content-center py-3">
        <Message variant="danger">
          <strong>404</strong> Thats an error
        </Message>
        The URL you have requested does not exist Click to go{" "}
        <LinkContainer to="/">Home</LinkContainer>
      </Card>
    </>
  );
};

export default NotFound;
