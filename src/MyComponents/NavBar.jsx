import { useState } from 'react';
import brandLogo from '../assets/icons/Brand.png';
import cart from '../assets/icons/Cart.png';
import profile from '../assets/icons/Profile.png';
import burger from '../assets/icons/hamburger.png';
import '../App.css';

export default function NavBar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  function handleBurgerClick() {
    setIsHamburgerOpen(!isHamburgerOpen);
  }

  return (
    <div className="nav">
      <div className="upper-nav">
        <div className="upper-left">
          <img src={brandLogo} alt="BRAND" />
        </div>
        <div className="upper-right">
          <a href="/Cart.jsx"><img src={cart} alt="CART" /></a>
          <img className="profile" src={profile} alt="PROFILE" />
          <img
            className={`burger ${isHamburgerOpen ? 'open' : ''}`}
            src={burger}
            alt="BURGER"
            onClick={handleBurgerClick}
          />
        </div>
      </div>

      <div className="lower-navBar">
        <a>HOME</a>
        <a>STORE</a>
        <a>ACCESSORIES</a>
        <a>BRAND</a>
        <a>PAGES</a>
        <a>ABOUT US</a>
        <a>NEWS</a>
        <a>CONTACT US</a>
      </div>

      <div className={`hamburger ${isHamburgerOpen ? 'open' : ''}`}>
        <a>HOME</a>
        <a>STORE</a>
        <a>ACCESSORIES</a>
        <a>BRAND</a>
        <a>PAGES</a>
        <a>ABOUT US</a>
        <a>NEWS</a>
        <a>CONTACT US</a>
      </div>

      <div className="line"></div>
    </div>
  );
}
