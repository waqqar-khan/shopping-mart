import { Container, Navbar, FormControl, Dropdown, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ minHeight: 80 }}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Mart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <FormControl
                  style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
                  placeholder="Search a product..."
                />
              </Nav.Link>
            </Nav>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  <FaShoppingCart color="white" fontSize="25px" />
                  <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ minWidth: 'fit-content', maxWidth: '100vw' }}>
                  <span style={{ padding: 10, whiteSpace: 'nowrap' }}>Cart is Empty!</span>
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
