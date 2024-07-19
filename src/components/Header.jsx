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

  return (
    <>
      <Navbar bg="primary" expand="lg" style={{ minHeight: 80 }} className="navbar-fixed-top">
        <Container fluid>
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
              <Dropdown drop="end">
                <Dropdown.Toggle variant="warning" id="cart-dropdown">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{cartCount}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    minWidth: "auto",
                    right: 0,
                    left: "auto",
                  }}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <Dropdown.Item key={prod.id}>
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
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <Link to="/cart" style={{ textDecoration: "none" }}>
                          <Button style={{ width: "100%" }}>Go To Cart</Button>
                        </Link>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <Dropdown.Item style={{ padding: "10px", whiteSpace: "nowrap" }}>
                      Cart is Empty!
                    </Dropdown.Item>
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
