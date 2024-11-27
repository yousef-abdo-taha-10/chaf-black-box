import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  NavbarBrand,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function DoubleRowNavbar() {
  return (
    <Navbar expand="lg">
      <Container>
        <Row>
          <Col>
            <NavbarBrand href="Home">
              <img sec="/Images/Chef_logo_design_vector_illustration__Restaurant_logo-removebg-preview 1.png"></img>
              <h3>Chef</h3>
            </NavbarBrand>
          </Col>

          <Col sm="0" lg="2">
            <Button>filter</Button>
          </Col>
          <Col sm="3" lg="4" xxl="5">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 6.00077C8.93913 6.00077 7.92172 6.42219 7.17157 7.17234C6.42143 7.92248 6 8.9399 6 10.0008C6 11.0616 6.42143 12.079 7.17157 12.8292C7.92172 13.5793 8.93913 14.0008 10 14.0008C11.0609 14.0008 12.0783 13.5793 12.8284 12.8292C13.5786 12.079 14 11.0616 14 10.0008C14 8.9399 13.5786 7.92248 12.8284 7.17234C12.0783 6.42219 11.0609 6.00077 10 6.00077ZM4 10.0008C3.99988 9.05647 4.22264 8.12548 4.65017 7.28351C5.0777 6.44154 5.69792 5.71236 6.4604 5.15529C7.22287 4.59822 8.10606 4.22898 9.03815 4.0776C9.97023 3.92622 10.9249 3.99698 11.8245 4.28412C12.724 4.57126 13.5432 5.06667 14.2152 5.73006C14.8872 6.39346 15.3931 7.2061 15.6919 8.1019C15.9906 8.9977 16.0737 9.95136 15.9343 10.8853C15.795 11.8193 15.4372 12.7072 14.89 13.4768L19.707 18.2938C19.8892 18.4824 19.99 18.735 19.9877 18.9972C19.9854 19.2594 19.8802 19.5102 19.6948 19.6956C19.5094 19.881 19.2586 19.9862 18.9964 19.9884C18.7342 19.9907 18.4816 19.8899 18.293 19.7078L13.477 14.8918C12.5794 15.53 11.5233 15.9089 10.4247 15.9869C9.326 16.0648 8.22707 15.8389 7.2483 15.3337C6.26953 14.8286 5.44869 14.0638 4.87572 13.1231C4.30276 12.1824 3.99979 11.1022 4 10.0008Z"
                  fill="#B0BABF"
                />
              </svg>
            </Form>
          </Col>
          <Col sm="0" lg="3" xxl="4">
            <Nav.Link className="navlink-end" href="#Orders">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 19C13.0001 19.1703 13.0437 19.3379 13.1267 19.4867C13.2098 19.6355 13.3294 19.7606 13.4744 19.8501C13.6194 19.9397 13.7848 19.9907 13.955 19.9984C14.1252 20.0061 14.2946 19.9701 14.447 19.894L18.447 17.894C18.6131 17.811 18.7528 17.6834 18.8504 17.5255C18.9481 17.3676 18.9999 17.1856 19 17V11.236C18.9999 11.0656 18.9563 10.898 18.8733 10.7492C18.7902 10.6004 18.6706 10.4753 18.5256 10.3858C18.3806 10.2962 18.2152 10.2452 18.045 10.2375C17.8748 10.2298 17.7054 10.2658 17.553 10.342L13.553 12.342C13.3869 12.4249 13.2472 12.5525 13.1496 12.7104C13.0519 12.8683 13.0001 13.0503 13 13.236V19ZM17.211 8.27595C17.3769 8.19282 17.5164 8.06516 17.6138 7.90728C17.7113 7.74939 17.7629 7.5675 17.7629 7.38195C17.7629 7.1964 17.7113 7.01451 17.6138 6.85663C17.5164 6.69874 17.3769 6.57109 17.211 6.48795L12.447 4.10595C12.3082 4.0366 12.1552 4.00049 12 4.00049C11.8448 4.00049 11.6918 4.0366 11.553 4.10595L6.789 6.48795C6.62312 6.57109 6.48364 6.69874 6.38617 6.85663C6.28869 7.01451 6.23707 7.1964 6.23707 7.38195C6.23707 7.5675 6.28869 7.74939 6.38617 7.90728C6.48364 8.06516 6.62312 8.19282 6.789 8.27595L11.553 10.658C11.6918 10.7273 11.8448 10.7634 12 10.7634C12.1552 10.7634 12.3082 10.7273 12.447 10.658L17.211 8.27595ZM6.447 10.342C6.29458 10.2658 6.12522 10.2298 5.95501 10.2375C5.78479 10.2452 5.61935 10.2962 5.47439 10.3858C5.32944 10.4753 5.20977 10.6004 5.12674 10.7492C5.04372 10.898 5.00009 11.0656 5 11.236V17C5.0001 17.1856 5.05188 17.3676 5.14955 17.5255C5.24722 17.6834 5.38692 17.811 5.553 17.894L9.553 19.894C9.70542 19.9701 9.87477 20.0061 10.045 19.9984C10.2152 19.9907 10.3806 19.9397 10.5256 19.8501C10.6706 19.7606 10.7902 19.6355 10.8733 19.4867C10.9563 19.3379 10.9999 19.1703 11 19V13.236C10.9999 13.0503 10.9481 12.8683 10.8504 12.7104C10.7528 12.5525 10.6131 12.4249 10.447 12.342L6.447 10.342Z"
                  fill="#B0BABF"
                />
              </svg>{" "}
              Orders
            </Nav.Link>

            <Nav.Link className="navlink-end" href="#Favorites">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.17115 6.22115C5.92126 5.47127 6.93849 5.05001 7.99915 5.05001C9.0598 5.05001 10.077 5.47127 10.8271 6.22115L11.9991 7.39215L13.1711 6.22115C13.5401 5.83911 13.9815 5.53438 14.4695 5.32475C14.9575 5.11511 15.4824 5.00477 16.0135 5.00015C16.5447 4.99554 17.0714 5.09674 17.563 5.29787C18.0545 5.49899 18.5012 5.796 18.8767 6.17157C19.2523 6.54714 19.5493 6.99375 19.7504 7.48534C19.9516 7.97692 20.0528 8.50364 20.0481 9.03476C20.0435 9.56588 19.9332 10.0908 19.7236 10.5788C19.5139 11.0668 19.2092 11.5082 18.8271 11.8772L11.9991 18.7062L5.17115 11.8772C4.42126 11.127 4 10.1098 4 9.04915C4 7.9885 4.42126 6.97126 5.17115 6.22115Z"
                  fill="#B0BABF"
                />
              </svg>{" "}
              Favorites{" "}
            </Nav.Link>

            <Nav.Link href="#cart" className="navlink-end  ttt" width="20px">
              <Badge bg="danger" className="ms-1">
                3
              </Badge>
              <FaShoppingCart className="me-1" /> Card
              <span className=" d-lg-inline"></span>
            </Nav.Link>
          </Col>

          <Col sm="1" lg="2">
            <Button>Sign in</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.05002 6.04987C8.36284 4.73705 10.1434 3.99951 12 3.99951C13.8566 3.99951 15.6372 4.73705 16.95 6.04987C18.2628 7.36269 19.0004 9.14326 19.0004 10.9999C19.0004 12.8565 18.2628 14.637 16.95 15.9499L12 20.8999L7.05002 15.9499C6.39993 15.2998 5.88425 14.5281 5.53242 13.6788C5.1806 12.8295 4.99951 11.9192 4.99951 10.9999C4.99951 10.0806 5.1806 9.17025 5.53242 8.32092C5.88425 7.47159 6.39993 6.69989 7.05002 6.04987ZM12 12.9999C12.5304 12.9999 13.0392 12.7892 13.4142 12.4141C13.7893 12.039 14 11.5303 14 10.9999C14 10.4694 13.7893 9.96073 13.4142 9.58566C13.0392 9.21058 12.5304 8.99987 12 8.99987C11.4696 8.99987 10.9609 9.21058 10.5858 9.58566C10.2107 9.96073 10 10.4694 10 10.9999C10 11.5303 10.2107 12.039 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999Z"
                fill="#B0BABF"
              />
            </svg>
            <span>Egypt</span>
          </Col>
          <Col sm="0" lg="4">
            <Nav.Link href="#Home" className="Nav-link-center">
              Home
            </Nav.Link>
            <Nav.Link href="#About" className="Nav-link-center">
              About Us
            </Nav.Link>
            <Nav.Link href="#Contact" className="Nav-link-center">
              Contact
            </Nav.Link>
            <Nav.Link href="#Reviews" className="Nav-link-center">
              Reviews
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default DoubleRowNavbar;
