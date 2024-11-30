import React from 'react'
import './Question.css';
import { Col, Container, Row } from 'react-bootstrap';

const Question = () => {
  return (
    <Container fluid  className='quest'>
       
        <Row  className='quest-img'>
            <Col className='quest-img11' >
               <img src=' images\Avatar.png' alt=' ' />
               <img src='images\Avatar-1.png ' alt=' ' />
            </Col>
           
        
            <Col  className='quest-img1'>
              <img src=' images\Avatar-2.png ' alt='' />
            </Col>

        </Row>

       

        <div className='quest-text'> 
          
          <p>Here are some of the most important customer questions <br/>and their answers.</p>
         
        </div>
       
    </Container>
  )
}

export default Question







