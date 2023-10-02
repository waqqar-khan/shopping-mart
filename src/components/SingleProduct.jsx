import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";
import PropTypes from "prop-types"; // Import PropTypes

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
              variant="danger"
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
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

/*
The warnings appearing about missing props validation in your 
SingleProduct component can be resolved by 
adding PropTypes validation for the prod prop.
*/
SingleProduct.propTypes = {
  prod: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    fastDelivery: PropTypes.bool.isRequired,
    ratings: PropTypes.number.isRequired,
    inStock: PropTypes.number.isRequired,
    // Add more PropTypes for other properties as needed
  }).isRequired,
};

export default SingleProduct;
