import React, { useState, useRef, useContext } from 'react';
import "./ShopCategory.css";
import { HomeContext } from "../../Context/HomeContext";
import Item from "../../components/HomeComp/Item/item";

const Fashioncategory = (props) => {
  const { all_products } = useContext(HomeContext);
  const [magnifierStyle, setMagnifierStyle] = useState({});
  const [magnifiedImage, setMagnifiedImage] = useState(null);
  const magnifierRef = useRef();

  const handleMouseEnter = (e, image) => {
    setMagnifiedImage(image);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.pageX - left - window.pageXOffset;
    const y = e.pageY - top - window.pageYOffset;
    const zoomLevel = 2;

    setMagnifierStyle({
      backgroundImage: `url(${magnifiedImage})`,
      backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
      backgroundPosition: `-${x * (zoomLevel - 1)}px -${y * (zoomLevel - 1)}px`,
      left: `${e.pageX - 50}px`,
      top: `${e.pageY - 50}px`,
      display: 'block'
    });
  };

  const handleMouseLeave = () => {
    setMagnifierStyle({ display: 'none' });
  };

  

  return (
    <div className='home-category'>
      <img src={props.banner} alt='Banner' id='banner' />
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
            return (
              <div key={i} className='each'>
                <Item 
                  id={item.id} 
                  name={item.name} 
                  image={item.image} 
                  new_price={item.new_price} 
                  old_price={item.old_price} 
                  onMouseEnter={(e) => handleMouseEnter(e, item.image)}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="fashioncategory-loadmore">
        Explore more
      </div>
      <div ref={magnifierRef} className="magnifier" style={magnifierStyle}></div>
    </div>
  );
}

export default Fashioncategory;
