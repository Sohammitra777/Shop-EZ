import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

import logo from "../Assets/logo.jpg";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className='navbar' id='homepage'>
            <div className='nav-logo'>
                <img src={logo} width={140} alt='logo'/>
                <p>ShopEZ</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("Home") }}>
                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>Home{menu === "Home" ? <hr /> : <></>}</Link>
                </li>
                <li onClick={() => { setMenu("Electronics") }}>
                    <Link to="/Electronics" style={{ textDecoration: "none", color: "black" }}>Electronics</Link> {menu === "Electronics" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("Fashion") }}>
                    <Link to="/Fashion" style={{ textDecoration: "none", color: "black" }}>Fashion</Link>{menu === "Fashion" ? <hr /> : <></>}
                    <ul className='dropdown-menu'>
                        <li><Link to="/Fashion/Men" style={{ textDecoration: "none", color: "azure" }}>Mens</Link></li>
                        <li><Link to="/Fashion/Women" style={{ textDecoration: "none", color: "azure" }}>Womens</Link></li>
                        <li><Link to="/Fashion/Kids" style={{ textDecoration: "none", color: "azure" }}>Kids</Link></li>
                    </ul>
                </li>
                <li onClick={() => { setMenu("Home & furnitures") }}>
                    <Link to="/Homeandfurnitures" style={{ textDecoration: "none", color: "black" }}>Home & Furnitures</Link>{menu === "Home & furnitures" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/Loginsignup" style={{ textDecoration: "none" }}><button>Login</button></Link>
                <Link to="/Cart" style={{ textDecoration: "none" }}>
                    <div className='cart'>
                        <img src={cart_icon} width={30} alt='cart'/>
                        <div className="nav-cart-count">0</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
