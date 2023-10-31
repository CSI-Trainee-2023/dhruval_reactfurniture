// import React from "react";
import NavBar from "./MyComponents/NavBar";
import Carousel from "./MyComponents/Carousel";
import Footer from "./MyComponents/Footer";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ProductDetails() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <NavBar />

      <div className="body">
        <div className="imgBar">
          <div className="HorizontalImages">
            <div className="horizontalImage">
              <img src={location.state.image} alt="" />
            </div>
            <div className="horizontalImage">
              <img src={location.state.image} alt="" />
            </div>
          </div>
          <div className="bigImage">
            <img src={location.state.image} alt="" />
          </div>
          <div className="details">
            <h1>Details</h1>
            <h4>{location.state.details}</h4>

            <h4>Composition - Cotton 50%, lyocell 50%</h4>
            <h4>Art. No - 0643448004</h4>
          </div>
        </div>

        <div className="priceBar">
          <h1>Checked Duvet Cover Set</h1>
          <h3>39.33$</h3>
          <h4>Light Khaki green/white checks</h4>

          <img src={location.state.image}id="desImg"   />

          <select id="options">
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
            <option value="option4">4</option>
          </select>

          <button id="addtoCart">ADD TO CART</button>
        </div>
      </div>

      <h1 className="carouselHeading">You may also like</h1>

      <Carousel />

      <Footer />
    </>
  );
}
