import React from 'react';
import "./Item.css";

const Item = ({ id, name, image, new_price, old_price, onMouseEnter, onMouseMove, onMouseLeave }) => {
  return (
    <div className="item">
      <img 
        src={image} 
        alt={name} 
        onMouseEnter={onMouseEnter} 
        onMouseMove={onMouseMove} 
        onMouseLeave={onMouseLeave}
      />
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

