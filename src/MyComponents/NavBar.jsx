// import React from "react";
import brandLogo from "../assets/icons/Brand.png";
import cart from "../assets/icons/Cart.png";
import profile from "../assets/icons/Profile.png";

export default function NavBar() {
  return (
    <div className="nav">
      <div className="upper-nav">
        <div className="upper-left">
          <img src={brandLogo} alt="BRAND" />
        </div>
        <div className="upper-right">
          <img src={cart} alt="CART" />
          <img src={profile} alt="PROFILE" />
        </div>
      </div>

      <div className="lower-navBar">
        <h3>HOME</h3>
        <h3>STORE</h3>
        <h3>ACCESSORIES</h3>
        <h3>BRAND</h3>
        <h3>PAGES</h3>
        <h3>ABOUT US</h3>
        <h3>NEWS</h3>
        <h3>CONTACT US</h3>
      </div>
      
      <div className="line"></div>
    </div>
  );
}
