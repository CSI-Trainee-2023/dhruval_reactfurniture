import React from "react";
import NavBar from "./MyComponents/NavBar";
import MyCarousel from './MyComponents/Carousel';

import searchIcon from "./assets/icons/search.png"
import shipping from "./assets/icons/shippingIcon.png"
import refund from "./assets/icons/refundIcon.png"
import support from "./assets/icons/supportIcon.png"

export default function HomePage() {
  return (
    <>
      <NavBar />

      <div className="searchBar">
        <img src={searchIcon} alt="" />
        <input type="text" value="" className="Search"  />
        <button>Search</button>
      </div>

      <div className="props">
        <div className="prop">
            <img src={shipping} alt="" />
            <h4>FREE SHIPPING</h4>
        </div>

        <div className="prop">
            <img src={refund} alt="" />
            <h4>100% REFUND</h4>
        </div>

        <div className="prop">
            <img src={support} alt="" />
            <h4>SUPPORT 24/7</h4>
        </div>
      </div>

      <MyCarousel />
    </>
  );
}
