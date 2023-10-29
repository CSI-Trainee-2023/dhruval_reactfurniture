import React from "react";
import ViewButton from "./ViewButton";
import PropTypes from "prop-types";

export default function HorizontalCard(props) {
  return (
    <div className="horizontalCard">
      <img src={props.image} alt="" />
      <div className="cardContent">
        <h2>{props.title}</h2>
        <ViewButton
          image="image-url"
          proName={props.title}
          price={19.99}
          details="Product details"
          list={[]}
          title="VIEW DETAILS"
        />
      </div>
    </div>
  );
}

HorizontalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
