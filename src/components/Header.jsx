import { useState, useEffect } from "react";
import {
  Container,
  Navbar,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  const [cartCount, setCartCount] = useState(cart.length);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    setCartCount(0);
  };

  return (
    <>
      <Navbar bg="primary" style={{ minHeight: 80 }}>
        <Container>
          <Navbar.Brand style={{ color: "#FFC107", fontSize: 30 }}>
            <Link to="/">Shopping Mart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <FormControl
                  style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
                  placeholder="Search a product..."
                  onChange={(e) =>
                    productDispatch({
                      type: "FILTER_BY_SEARCH",
                      payload: e.target.value,
                    })
                  }
                />
              </Nav.Link>
            </Nav>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="warning">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{cartCount}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{ minWidth: "fit-content", maxWidth: "100vw" }}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <span className="cartItem" key={prod.id}>
                          <img
                            src={prod.image}
                            className="cartItemImage"
                            alt={prod.name}
                          />
                          <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span>$ {prod.price}</span>
                          </div>
                          <AiFillDelete
                            fontSize="20px"
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod,
                              })
                            }
                          />
                        </span>
                      ))}
                      <Link to="/cart">
                        <Button
                          style={{ width: "95%", margin: "0 10px" }}
                          onClick={handleClearCart}
                        >
                          Go To Cart
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <span style={{ padding: 10, whiteSpace: "nowrap" }}>
                      Cart is Empty!
                    </span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
