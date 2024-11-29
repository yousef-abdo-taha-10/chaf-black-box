import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import "../pizza.css";
const pizza = () => {

const [products,setproducts]=useState([]);
const [loding,setloding]=useState(true);
const [error,setError]=useState(null);

const fitshproducts =async ()=>{

    try{
        setloding(true);
        const Response=await axios.get("");
        setproducts(Response.data.products);


    }catch(error){
       setError('Error fetching products');

    }finally{
        setloding(false);

    }

    useEffect(()=>{
        fitshproducts();

    },[])
};
  return (
    <div className='pizza-continer'>
        <header className='header'>
        <img src="\Images\Group 364.png" alt="React Image" />
        <h1>Buy one and Get one Free</h1>

        </header>
        {loding&&<p>loding...</p>};
        {error&&<p>{error}</p>};

        <Container>
        <Row>
         
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} EGP</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default pizza
