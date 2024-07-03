// Fashioncategory.js
import React, { useContext } from 'react';
import "../Pages/CSS/ShopCategory.css";
import { HomeContext } from "../Context/HomeContext";
import Item from "../components/Item/item";

const Fashioncategory = (props) => {
  const { all_products } = useContext(HomeContext);

  return (
    <div className='home-category'>
      <img src={props.banner} alt='Banner' id='banner'/>
      <div className="fashioncategory-indexsort">
        <p>
          <span>Showing products</span>
        </p>
        <div className="fashioncategory-sort">
          Sort by <i className="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="fashioncategory-products">
        {all_products.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="fashioncategory-loadmore">
        Explore more
      </div>
    </div>
  );
}

export default Fashioncategory;
