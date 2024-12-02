import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { FaCartPlus, FaRegHeart, FaBoxOpen } from "react-icons/fa"; // Use React Icons for cart, heart, and orders.
import { Link } from "react-router-dom"; // Import Link for navigation

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="transparent"
      variant="light"
      className="shadow-none"
    >
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand href="#">
          <img
            src="images\Chef_logo.png"
            alt="Chef Logo"
            style={{ width: "50px", height: "50px" }}
          />
          <span>Chef</span>
        </Navbar.Brand>

        {/* Location */}
        <Navbar.Text className="ms-3">Egypt</Navbar.Text>

        {/* Search Bar */}
        <Form className="d-flex ms-auto w-30" style={{ marginTop: "-40px" }}>
          <FormControl
            type="search"
            placeholder="Find your favourite meal"
            className="me-2 "
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        {/* Navbar Links */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 w-100 justify-content-center"
            style={{ marginBottom: "300px" }}
          >
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Reviews</Nav.Link>
          </Nav>

          {/* Icons for Orders, Favorites, Cart */}
          <Nav className="ms-auto">
            <Nav.Link href="#">
              <FaBoxOpen size={20} />
            </Nav.Link>
            <span className="ms-2">Orders</span>
            <Nav.Link href="#">
              <FaRegHeart size={20} />
            </Nav.Link>
            <span className="ms-2">Favorites</span>
            {/* Link the Cart icon to the Cart page */}
            <Link to="/cart">
              <Nav.Link href="#">
                <FaCartPlus size={20} />
              </Nav.Link>
            </Link>
            <span className="ms-2">Cart</span>

            {/* Sign In Button */}
            <Nav.Link href="#">
              <Button variant="outline-warning">Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
