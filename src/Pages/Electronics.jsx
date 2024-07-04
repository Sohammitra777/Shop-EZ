import React, { useState, useRef, useEffect } from 'react';
import './Electronics.css';

// Importing the images
import smartphoneImg from '../components/Assets/p26_img.jpg'; // Correct relative path
import laptopImg from '../components/Assets/p29_img.jpg';
import homeTheatreImg from '../components/Assets/p28_img.jpeg';
import cameraImg from '../components/Assets/p30_img.jpg';
import fullSizeImg from '../components/Assets/p31_img.png';

const Electronics = () => {
    const products = [
        { id: 1, title: 'Smartphone', price: '$299', image: smartphoneImg },
        { id: 2, title: 'Laptop', price: '$899', image: laptopImg },
        { id: 3, title: 'Home Theatre', price: '$900', image: homeTheatreImg },
        { id: 4, title: 'Camera', price: '$399', image: cameraImg }
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
        <div className="electronics-page">
            <div className="fullsize-image">
                <img src={fullSizeImg} alt="Full Size Electronics" className="fullsize-img" />
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

export default Electronics;
