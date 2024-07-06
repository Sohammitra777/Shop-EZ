import React, { useState, useRef } from 'react';
import '../Pages/Homeandfurniture.css'; // Ensure correct path to CSS file

// Import your images here
import sofaImg from '../components/Assets/sofa.png';
import tableImg from '../components/Assets/table.png';
import lampImg from '../components/Assets/lamp.png';
import shelfImg from '../components/Assets/shelf.png';
import fullSizeImg from '../components/Assets/furniture_fullsize.png';

const HomeandFurniture = () => {
    const products = [
        { id: 1, title: 'Sofa', price: '$599', image: sofaImg },
        { id: 2, title: 'Table', price: '$299', image: tableImg },
        { id: 3, title: 'Lamp', price: '$79', image: lampImg },
        { id: 4, title: 'Shelf', price: '$149', image: shelfImg }
    ];

    const [magnifierStyle, setMagnifierStyle] = useState({});
    const [magnifiedImage, setMagnifiedImage] = useState(null);
    const magnifierRef = useRef();

    const handleMouseEnter = (e, image) => {
        setMagnifiedImage(image);
    };

    const handleMouseMove = (e) => {
        const magnifier = magnifierRef.current;
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
        <div className="home-and-furniture-page">
            <div className="fullsize-image">
                <img src={fullSizeImg} alt="Full Size Home and Furniture" className="fullsize-img" />
            </div>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="product-image" 
                            onMouseEnter={(e) => handleMouseEnter(e, product.image)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        />
                        <div className="product-info">
                            <h2 className="product-title">{product.title}</h2>
                            <p className="product-price">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div ref={magnifierRef} className="magnifier" style={magnifierStyle}></div>
        </div>
    );
};

export default HomeandFurniture;
