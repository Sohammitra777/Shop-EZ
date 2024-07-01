import React, { useState} from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';


import logo from "../Assets/logo.jpg"
import cart_icon from "../Assets/cart_icon.png"

const Navbar = () => {

    const [menu,setMenu]=useState("Home")


  return (
    <div className='navbar' id='homepage'>
        <div className='nav-logo'>
            <img src={logo} width={140} alt=''/>
            <p>ShopEZ</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}><Link to="/" style={{textDecoration:"none",color:"black"}} >Home{menu==="Home"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setMenu("Electronics")}}><Link to="/Electronics" style={{textDecoration:"none",color:"black"}}>Electronics</Link> {menu==="Electronics"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Fashion")}}><Link to="/Fashion" style={{textDecoration:"none",color:"black"}}>Fashion</Link>{menu==="Fashion"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Home & furnitures")}}><Link to="/Homeandfurnitures" style={{textDecoration:"none",color:"black"}}>Home & furnitures </Link>{menu==="Home & furnitures"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/Loginsignup" style={{textDecoration:"none"}}><button>Login</button></Link>
            <Link to="/Cart" style={{textDecoration:"none"}}>
            <div className='cart'>
                <img src={cart_icon} width={30} alt=''/>
                <div className="nav-cart-count">0</div>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default Navbar





