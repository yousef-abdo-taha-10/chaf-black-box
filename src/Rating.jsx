import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


import './Rating.css';
const Rating = () => {
    return (
        <div>
            <section className='rating'>
                <Container className='contr'>
                  <h2 className='hhh'>Our Customers Love Us!</h2>

                    <Marquee>
                        <Row className='rating-row'>
                            <Col lg={4} md={4} sm={4}>

                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt=''/>
                               
                                <p>Delicious food, quick delivery, and
                                    excellent service. I order from here
                                    regularly!</p>
                                  
                                <div className="rating-div1">
                                    <div>
                                        <img src="image\a_user01_avatar.png" alt='' />

                                    </div>


                                    <div className="rating-div2">

                                        <h5>Samantha</h5>
                                        <h6>Food Enthusiast</h6>


                                    </div>
                                </div>

                            </Col>
                            <Col lg={4} md={4} sm={4}>

                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <p>
                                    The taste of the dishes is amazing,
                                    and the portion sizes are generous.
                                    Highly recommended!
                                </p>
                            
                                <div className="rating-div1">
                                    <div>
                                        <img src="image\a_user02_avatar.png" alt='' />

                                    </div>


                                    <div className="rating-div2">

                                        <h5> Michael</h5>
                                        <h6>Happy Customer</h6>


                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4}>
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <img src='icons\Star.svg' alt='' />
                                <p>Fresh ingredients,great flavors, and a diverse menu.i'm impressed with every order!
                                </p>

                                <div className="rating-div1">
                                    <div>
                                        <img src="image\a_user03_avatar.png" alt='' />

                                    </div>


                                    <div className="rating-div2">

                                        <h5>Emily</h5>
                                        <h6>Foodie Extraordinai</h6>


                                    </div>
                                </div>

                            </Col>



                        

                            
                        </Row>
                    </Marquee>
                </Container>
            </section>
        </div>
    )
}

export default Rating