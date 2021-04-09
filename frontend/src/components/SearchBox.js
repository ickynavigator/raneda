import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const SearchBox = ({ history, location }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    let currPath = location.pathname.substr(1);
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`${currPath}?keyword=${keyword}`);
    } else {
      history.push(`/shop`);
    }
  };

  return (
    <div>
      <InputGroup style={{ border: "1px solid black" }}>
        <Form.Control
          // type="text"
          // name="Search"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Products"
          aria-label="Products"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Prepend>
          <Button
            onClick={submitHandler}
            variant="outline-success"
            style={{ border: "none" }}
          >
            Search
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
