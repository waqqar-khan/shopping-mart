import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";
import { Button, Col, ListGroup, Row, Form, Image } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const navigate = useNavigate();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  const [checkoutConfirmed, setCheckoutConfirmed] = useState(false);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleCheckout = () => {
    dispatch({ type: "CLEAR_CART" });
    setTotal(0);
    setCheckoutConfirmed(true);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span>
                </Col>
                <Col md={2}>
                  <span>$ {prod.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total $ {total}</span>
        <Button type="button" disabled={cart.length === 0} onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </div>
      {checkoutConfirmed && (
        <div className="checkout-confirmation">
          <div className="confirmation-message">
            Thanks for visiting Shopping Mart! Checkout is under progress...
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
