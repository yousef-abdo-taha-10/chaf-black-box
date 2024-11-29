import React from "react";
import "./Sliddder.css";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Sliddder = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
<<<<<<< HEAD
      <Carousel.Item  className='carousal-img'>
      <img Src='' alt='' />
      
      </Carousel.Item >
      <Carousel.Item  className='carousal-img'>
      <img Src='img\Rectangle 24.png' alt=''/>
       
      </Carousel.Item>
      <Carousel.Item  className='carousal-img'>
      <img Src='img\Rectangle 25.png' alt=''/>
     
      </Carousel.Item>
    </Carousel>
=======
        <Carousel.Item className="carousal-img">
          <img Src="images/Rectangle26.png" alt="" />
        </Carousel.Item>
        <Carousel.Item className="carousal-img">
          <img Src="images/Rectangle24.png" alt="" />
        </Carousel.Item>
        <Carousel.Item className="carousal-img">
          <img Src="images/Rectangle25.png" alt="" />
        </Carousel.Item>
      </Carousel>
>>>>>>> c708c51468eb8efe354ca2a3b1bab4f818c03381
    </div>
  );
};

export default Sliddder;
