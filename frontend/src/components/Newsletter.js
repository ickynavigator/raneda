import { Button, Form } from "react-bootstrap";
import FormContainer from "./FormContainer";
import Message from "./Message";

const Newsletter = ({ name, email }) => {
  const [name, set];
  return (
    <>
      <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
          <div className="">
            <Form.Group controlId="name">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
          </div>
          <Button type="submit" variant="primary">
            Sign In
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Newsletter;
