import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import PropTypes from "prop-types";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const isInCart = cart.some((p) => p.id === prod.id);

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: prod });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: prod });
  };

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 Days Delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {isInCart ? (
            <Button
              onClick={handleRemoveFromCart}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={handleAddToCart}
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

SingleProduct.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    fastDelivery: PropTypes.bool.isRequired,
    ratings: PropTypes.number.isRequired,
    inStock: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleProduct;
