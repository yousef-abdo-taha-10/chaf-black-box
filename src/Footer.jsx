import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <section className='footer'>
                <Container>
                    <Row className='footer-row'>
                        <Col className='' lg={3}  md={6} ms={12} >
                            <h4>Our Features</h4>
                            <ul>
                                <li>Quick Ordering</li>
                                <li>Secure Payments</li>
                                <li>Track Your Order</li>
                                <li>Customizable Options</li>
                                <li>Exclusive Offers</li>
                            </ul>
                        </Col>
                        <Col className=''lg={3}  md={6} ms={12}>
                            <h4>Our Products</h4>
                            <ul>
                                <li>Burgers</li>
                                <li>Salads</li>
                                <li>Smoothies</li>
                                <li>Desserts</li>
                                <li>Drinks</li>
                            </ul>
                        </Col>
                        <Col className='' lg={3}  md={6} ms={12}>
                            <h4>About Us</h4>
                            <ul>
                                <li>Story</li>
                                <li>Mission</li>
                                <li>Team</li>
                                <li>Values</li>
                                <li>Community</li>
                            </ul>

                        </Col>
                        <Col className='' lg={3}  md={6} ms={12} >
                            <h4> Social Media</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Pinterest</li>
                                <li>LinkedIn</li>
                            </ul>


                        </Col>
                    </Row>
                </Container>

                <div className='footer-last'>
                <h5 ><img src='Images\Chef_logo.png' alt=''/>Chef - Your First Choice</h5>
                <p>© 2024 Chef. All Rights Reserved.</p>
                </div>

              


            </section>
        </div>
    )
}

export default Footer


