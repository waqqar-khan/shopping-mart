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
  return (
    <>
      <Navbar bg="primary" style={{ minHeight: 80 }}>
        <Container>
          <Navbar.Brand style={{ color: "yellow", fontSize: 30 }}>
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
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{ minWidth: "fit-content", maxWidth: "100vw" }}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((prod) => (
                        <span className="cartItem" key={prod.id}>
                          <img
                            src={prod.img}
                            className="cartItemImage"
                            alt={prod.name}
                          />
                          <div className="cartItemDetail">
                            <span>{prod.name}</span>
                            <span>$ {prod.price.split(".")[0]}</span>
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
                        <Button style={{ width: "95%", margin: "0 10px" }}>
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
