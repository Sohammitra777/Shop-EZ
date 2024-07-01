import React from 'react'
import "./Footer.css"
import logo from "../Assets/footer_logo.png"
import insta from "../Assets/insta_logo.png"
import pinterest from "../Assets/pinterest.png"
import facebook from "../Assets/facebook.png"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={logo} alt='' width={400}/>
            <p>ShopEZ</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
          <div className="footer-icons-container">
            <img src={insta} alt='' width={50}/>
          </div>
          <div className="footer-icons-container">
            <img src={facebook} alt='' width={50}/>
          </div>
          <div className="footer-icons-container">
            <img src={pinterest} alt='' width={40}/>
          </div>
          
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 - All Right Reserved</p>
          </div>
    </div>
  )
}

export default Footer
