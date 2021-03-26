import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductTwo = ({ product }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded bonnet-1">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Card.Text as="h3">₦{product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductTwo;
// my-3 p-3 rounded
