import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const discountedPriceCalc = (num, discount) => {
    const foo = addDecimals((100 - discount) * 0.01 * num);
    return (
      <>
        {foo} <del>{num}</del>
      </>
    );
  };

  product.discountedPrice = discountedPriceCalc(
    product.price,
    product.discount
  );

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              // text={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">
          ₦{product.discount > 0 ? product.discountedPrice : product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
