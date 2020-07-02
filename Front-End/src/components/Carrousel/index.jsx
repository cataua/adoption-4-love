import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import kids01 from '../../assets/img/kids01.jpg' 
import kids02 from '../../assets/img/kids02.jpg' 
import kids03 from '../../assets/img/kids03.jpg' 

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    
  return (
    <div className="hero-container">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids01}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids02}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kids03}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );

};

export default ControlledCarousel;