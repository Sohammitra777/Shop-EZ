import React from 'react';
import { Link } from 'react-router-dom'; // Add this import if you're using Link
import "./Item.css";

const Item = ({ id, name, image, new_price, old_price, onMouseEnter, onMouseMove, onMouseLeave }) => {
  return (
    <div className="item">
      <Link to={`/product/${id}`}>
        <img 
          src={image} 
          alt={name} 
          onMouseEnter={onMouseEnter} 
          onMouseMove={onMouseMove} 
          onMouseLeave={onMouseLeave}
        />
      </Link>
      <p>{name}</p>
      <div className='item-prices'>
        <div className="item-price-new">
          {new_price}
        </div>
        <div className="item-price-old">
          {old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
