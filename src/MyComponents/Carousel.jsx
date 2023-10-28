import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import image1 from '../assets/banner-img-1.png'
import image2 from '../assets/banner-img-2.png'

export default function MyCarousel() {
    return (
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image1} alt="Slide 3" />
        </div>
      </Carousel>
    );
  }