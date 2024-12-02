import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (

        <>

            <section className='about' >

                <Container >

                    <Row className='about-row'>
                        <Col className='about-left' lg={6} md={12} sm={12}>
                            <h1>About <span>Us</span></h1>
                            <p>This is a type of restaurant which
                                typically serves food and drinks, in
                                addition to light refreshments such as
                                baked goods or snacks .The term comes
                                from the rench word meaning food. </p>
                            <Row className='about-row2'>
                                <Col sm={12} md={6}>
                                    <div className=''>
                                        <span>
                                            <img src='icons\Online-Shopping.svg' alt='Online order'  />
                                        </span>
                                        <h5>Online order</h5>
                                    </div>
                                </Col>
                               
                                <Col sm={12} md={6}>
                                    <div className=''>
                                        <span>
                                            <img src='icons\Chef-Hat.svg' alt='Super chefs'  />
                                        </span>
                                        <h5>Super chefs</h5>
                                    </div>
                                </Col>
                                <Col sm={12} md={6} >
                                    <div className=''>
                                        <span>
                                            <img src='icons\Time-Machine.svg' alt='24h service'  />
                                        </span>
                                        <h5>24h service</h5>
                                    </div>
                                </Col>
                                <Col sm={12} md={6}>
                                    <div className=''>
                                        <span>
                                            <img src='icons/Food.svg' alt='Organizing food places'  />
                                        </span>
                                        <h5>Organizing food places</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>


                        <Col className='about-right' lg={6} md={12} sm={12}>
                            <img src='Images\Group110.png' alt='chef'  className='last-img'/>
                        </Col>
                    </Row>
                </Container>




            </section>



        </>

    )
}

export default About