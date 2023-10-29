// import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function ViewButton(props) {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate("/productdetails", {state: {image: props.image, productName: props.proName, price: props.price, details: props.details, list: props.list}})} className='view'>{props.title}</button>
  )
}

ViewButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  proName: PropTypes.string, 
  price: PropTypes.string,
  details: PropTypes.string, 
  list: PropTypes.array,
};

