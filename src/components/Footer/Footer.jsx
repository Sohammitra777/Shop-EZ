import React from 'react'
import "./Footer.css"
import logo from "../Assets/footer_logo.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={logo} alt='' width={300}/>
            <p>ShopEZ</p>
        </div>
        <ul>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons"></div>
    </div>
  )
}

export default Footer
