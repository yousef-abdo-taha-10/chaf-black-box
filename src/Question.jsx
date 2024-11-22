import React from 'react'
import './Question.css';
import { Col, Container, Row } from 'react-bootstrap';

const Question = () => {
  return (
    <Container className='quest'>
       
        <Row  className='quest-img'>
            <Col className='quest-img11' >
               <img src=' image\Avatar.png' alt=' ' />
               <img src='image\Avatar-1.png ' alt=' ' />
            </Col>
           
        
            <Col  className='quest-img1'>
              <img src=' image\Avatar-2.png ' alt='' />
            </Col>

        </Row>

       

        <div className='quest-text'> 
           <h3>Still have questions?</h3>
          <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
          <button>Get in touch</button>
        </div>
         {/* <button><a href='Questform.jsx'>Get in touch</a></button> */}
    </Container>
  )
}

export default Question







