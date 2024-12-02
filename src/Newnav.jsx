
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navnew.css';



function Newnav() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length >= 2) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`https://api.example.com/search?query=${query}`);
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
        setLoading(false);
      };

      fetchData();
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <Navbar expand="lg" className="bg-light all-nav">
      <Container fluid >
        {/* Logo and Location */}
        <div className=" ">
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="Images\Chef_logo.png"
              alt="Chef Logo"
              style={{ height: '100px', marginRight: '-20px' }}
            />
            Chef
          </Navbar.Brand>

          <span className="text-muted ms-2 d-none d-sm-block" style={{ marginTop: "-24px" }}><img src='icons\Location-marker.svg' alt='' />Egypt</span>
        </div>

        {/* Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Collapsible Content */}
        <Navbar.Collapse id="navbarScroll">
          <div className="w-100">
            {/* Search Bar */}
            <div className="d-flex flex-column flex-lg-row align-items-center">
             
              <Form
                className="d-flex flex-grow-1 search-bar mx-lg-auto mb-3 mb-lg-0"
                style={{ maxWidth: '550px' }}
              >
                <Form.Control
                  type="search"
                  placeholder="Find your favourite meal"
                  aria-label="Search"
                  className="w-100"
                  style={{ borderRadius: '5px' }}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                {loading && <p>Loading...</p>}
                <ul>
                  {results.map((item, index) => (
                    <li key={index}>{item.name}</li> 
                  ))}
                </ul>
              </Form>

              {/* Icons and Sign-In */}
              <div className="d-flex align-items-center">
                <Nav.Link href="#orders" className="px-3 d-flex align-items-center">
                  <img src="icons/Cube.svg" alt="" style={{ width: '20px', marginRight: '8px' }} />
                  Orders
                </Nav.Link>
                <Nav.Link href="#favorites" className="px-3 d-flex align-items-center">
                  <img src="icons/Heart.svg" alt="" style={{ width: '20px', marginRight: '8px' }} />
                  Favorites
                </Nav.Link>
                <Nav.Link href="#cart" className="position-relative px-3 d-flex align-items-center">
                  <img src="icons/Shopping cart.svg" alt="" style={{ width: '20px', marginRight: '8px' }} />
                  Cart
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '0.8em' }}
                  >
                    3
                  </span>
                </Nav.Link>
                <Button variant="outline-warning"
                  className="me-lg-3 mb-3 mb-lg-0 ">
                    {/* <Link to='/'> Sign In</Link> */}
                    Sign In
                </Button>
              </div>
            </div>

            {/* Navigation Links */}
            <Nav className="d-flex  flex-wrap mt-3 " style={{ marginLeft: "240px" }} >
              <Nav.Link href="#home" className="px-3">Home</Nav.Link>
              <Nav.Link href="#about" className="px-3">About us</Nav.Link>
              <Nav.Link href="#contact" className="px-3">Contact</Nav.Link>
              <Nav.Link href="#reviews" className="px-3">Reviews</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>





  );
}

export default Newnav;
