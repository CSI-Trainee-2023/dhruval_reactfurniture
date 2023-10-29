import React, { useRef } from 'react';
import banner1 from '../assets/images/banner-img-1.png';
import banner2 from '../assets/images/banner-img-2.png';

import Mycard from './Mycard.jsx';
import './Carousel.css';

const Carousel = () => {
  const boxRef = useRef(null);

  const btnpressprev = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
      console.log(width);
    }
  };

  const btnpressnext = () => {
    const box = boxRef.current;
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
      console.log(width);
    }
  };

  return (
    <div className="banner-carousel">
      <button className="left-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="right-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>

      <div ref={boxRef} className="img-container">
        <Mycard src={banner1} />
        <Mycard src={banner2} />
        <Mycard src={banner1} />
      </div>
    </div>
  );
};

export default Carousel;
