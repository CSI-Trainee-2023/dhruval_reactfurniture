import React from 'react';
import ViewButton from './ViewButton';
import PropTypes from 'prop-types';
import ratings from '../assets/icons/ratings.png'


export default function VerticalCard(props) {
  return (
    <div className="verticalCardMain">
      <div className="verticalCard">
        <img src={props.image} alt={`Image of ${props.title1}`} />
        <h2>{props.title1}</h2>
        {props.title2 && (
          <>
            <img src={ratings} alt="Rating" />
            <h3>{props.title2}</h3>
          </>
        )}
      </div>
      <div className="hoverBox">
        <img src={props.image} alt={`Image of ${props.title1}`} />
        <div className="hoverContent">
          <h1>DECOR</h1>
          <p>
            {props.details ||
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur sint officia voluptatibus quos odio doloremque aut vel, magni sapiente expedita.'}
          </p>
          <ViewButton
            title="VIEW ALL"
            image={props.image}
            proName={props.title1}
            price={props.title2}
            details={props.details}
            list={props.list}
          />
        </div>
      </div>
    </div>
  );
}

VerticalCard.propTypes = {
  image: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string, 
  details: PropTypes.string, 
  list: PropTypes.array,
};
  
