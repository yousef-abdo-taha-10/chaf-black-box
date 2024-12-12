import React, { useState, useEffect } from "react";
import axios from "axios"
import { Card, Col, Container, Row } from "react-bootstrap";
import './Burger.css';

const Burger = () => {
    const [burger, setBurger] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/categories')
            .then((response) => {
                setBurger(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="burger-par">


            <Container>
                <Row>
                    <Col className="burger-contr" sm={12} md={12} lg={10}>

                        <img src='img\Burger section 1.png' alt='' className="burger-img" />

                        <h1>SPECIAL OFFER <span>50%</span></h1>
                        <p>Chicken strips with Buffalo sauce and<br />
                            melted cheddar cheese+fries.</p>
                    </Col>

                </Row>

                <Row>

                    {burger.map((burger) => (
                        <Col key={burger.id} sm={12} md={6} lg={4}>
                            <Card className="card-burger">
                                <Card.Img variant="top" src={burger.image} />
                                <div className="burger-burger">
                                    <h2>{burger.name}</h2>
                                    <p>{burger.description}</p>
                                    <h5>{burger.price}</h5>
                                    <button>add to cart</button>

                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row>
                    <Col className="burger-lasta" sm={12} md={6} lg={6}>

                        <h1>
                        Free delivery for
                        your first order.

                        </h1>
                    </Col>
                    <Col className="burger-lastb" sm={12} md={6} lg={6}>


                    </Col>
                </Row>
            </Container>


        </div>
    );
};

export default Burger