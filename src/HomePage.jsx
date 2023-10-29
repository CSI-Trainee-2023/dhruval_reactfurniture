import React from "react";
import NavBar from "./MyComponents/NavBar";
import MyCarousel from "./MyComponents/Carousel";
import HorizontalCard from "./MyComponents/HorizontalCard";
import VerticalCard from "./MyComponents/VerticalCard";
import ViewButton from "./MyComponents/ViewButton";
import Footer from "./MyComponents/Footer";

import searchIcon from "./assets/icons/search.png";
import shipping from "./assets/icons/shippingIcon.png";
import refund from "./assets/icons/refundIcon.png";
import support from "./assets/icons/supportIcon.png";
import bedsheet from "./assets/images/bedsheet.png";
import email from "./assets/icons/email.png"

const verticalImages = [
  {
    id: "towel.png",
    desc: "Linen Beach Towel",
    price: "9.99$",
    details:
      "Twin duvet cover set in soft, woven fabric made from a Tencel Iyocell and cotton blend with a printed pattern. One pillowcase. Thread count 144.",
  },
  {
    id: "plates.png",
    desc: "4-pack Small Ceramic Plates",
    price: "29.01$",
    details:
      "Glazed ceramic plates with a small rim. Height approx. 2 cm, diameter at the top 14 cm.",
  },
  {
    id: "glassBox.png",
    desc: "Square Clear Glass",
    price: "99.9$",
    details:
      "A square clear box is a transparent, four-sided container with see-through walls, often made of glass, allowing easy visibility of its contents.",
  },
  {
    id: "basket.png",
    desc: "Metal Wire Basket",
    price: "199.9$",
    details:
      "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization.",
  },
  {
    id: "largeBox.png",
    desc: "Large Clear Glass Box",
    price: "149.9$",
    details:
      "A large clear glass box is a spacious, transparent container made of glass, with four see-through sides, typically used for displaying or storing items while providing a clear view of its contents.",
  },
  {
    id: "mat.png",
    desc: "Round Jute Placemat",
    price: "49.9$",
    details:
      "A round jute placemat is a circular dining accessory made from natural jute fibers, adding a rustic and eco-friendly touch to table settings while protecting surfaces.",
  },
  {
    id: "basket.png",
    desc: "Metal Wire Basket",
    price: "199.9$",
    details:
      "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization.",
  },
  {
    id: "basket.png",
    desc: "Metal Wire Basket",
    price: "199.9$",
    details:
      "A metal wire basket is a sturdy container constructed from interwoven metal wires, forming an open, breathable structure ideal for storage and organization.",
  },
];

const topRating = [
  {
    id: "Tray.png",
    desc: "Tray with Foot",
    price: "19.9$",
  },
  {
    id: "cushion.png",
    desc: "Twill Seat Cushion",
    price: "29.9$",
  },
  {
    id: "beverageGlass.png",
    desc: "Fluted Beverage Glass",
    price: "49.9$",
  },
  {
    id: "eggCup.png",
    desc: "Ceramic Egg Cup",
    price: "49.9$",
  },
  {
    id: "bambooBox.png",
    desc: "Small Bamboo Box",
    price: "9.99$",
  },
  {
    id: "cutleryBasket.png",
    desc: "Metal Cutlery Basket",
    price: "29.9$",
  },
  {
    id: "ceramicCups.png",
    desc: "4-pack Ceramic Cups",
    price: "49.9$",
  },
  {
    id: "Napkins.png",
    desc: "2-pack Linen Napkins",
    price: "9.99$",
  },
  {
    id: "stonewarePlate.png",
    desc: "Glazed Stoneware Plate",
    price: "99.9$",
  },
];

export default function HomePage() {
  return (
    <>
      <NavBar />

      <div className="searchBar">
        <img src={searchIcon} alt="" />
        <input type="text" value="" className="Search" />
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

      <div className="horizontalCardHolder">
        <HorizontalCard
          image="../src/assets/images/vintageChair.png"
          title="INY VINTAGE CHAIR"
        />
        <HorizontalCard
          image="../src/assets/images/vase.png"
          title="LARGE TERRACOTA VASE"
        />
      </div>

      <div className="verticalCardHolder" id="store">
        {verticalImages.map((element) => (
          <VerticalCard
            key={element.id} // Add a unique key
            image={`../src/assets/items/${element.id}`}
            title1={element.desc}
            title2={element.price}
            details={element.details}
            list={verticalImages}
          />
        ))}
      </div>

      <div className="bedsheet-banner">
        <img src={bedsheet} alt="" />
      </div>

      <div className="topRating">
        <h2>Top Rating</h2>
        <div className="topRatingHolder">
          {topRating.map((element) => (
            <VerticalCard
              key={element.id} // Add a unique key
              image={`../src/assets/items/${element.id}`}
              title1={element.desc}
              title2={element.price}
              details={element.details}
              list={verticalImages}
            />
          ))}
        </div>
      </div>

      <div className="subscribePromotion">
        <div className="headingLeft">
          <h2>SIGN UP FOR OUR NEWSLETTER</h2>
          <h3>Subscribe for the latest deals and promotions</h3>
        </div>
        <div className="emailInputField">
          <input type="email" id="emailInput" placeholder="Enter Your e-mail address" />
          <a href="#">
            <img src={email} alt="email" />
          </a>
        </div>
      </div>

      <Footer />

      <div className="brandFooter">
        <h3>Brand Registered Name &copy; - All rights reserved</h3>
      </div>
    </>
  );
}
