import React from 'react'
import  './Sliddder.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Sliddder = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item  className='carousal-img'>
      <img Src='img\Rectangle 26.png' alt='' />
      
      </Carousel.Item >
      <Carousel.Item  className='carousal-img'>
      <img Src='img\Rectangle 24.png' alt=''/>
       
      </Carousel.Item>
      <Carousel.Item  className='carousal-img'>
      <img Src='img\Rectangle 25.png' alt=''/>
     
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Sliddder









 

