import React from 'react';
import "./footer.css";
import logo from "../../assets/Fruitporium logo.jpg"
import facebook from "../../assets/facebook-circle-logo-24.png"
import twitter from "../../assets/twitter-logo-24.png"
import instagram from "../../assets/instagram-logo-24.png"
import trademark from "../../assets/fssai8862.jpg"
import veg from "../../assets/th.jpeg"

const Footer = () => {
  return (
    <>
      <div className='footer'>
        {/* <hr className='hr' /> */}
        <div className="sec-1">
          <img src={logo} alt='logo' className='footer-logo' />
          <div className='social-logo'>
            <img className='facebook' src={facebook} alt='logo' />
            <img className='twitter' src={twitter} alt='logo' />
            <img className='instagram' src={instagram} alt='logo' />
            
          </div>
        </div>
        <div className='sec-2'>
          <h3>Menu</h3>
          <div className='menu'>
            <p className='link-text' to="/">About Us</p>
            <p className='link-text' to="/">Shop</p>
            <p className='link-text' to="/">Contact</p>
            
          </div>
        </div>
        <div className="sec-3">
          <h3>Have a Questions?</h3>
          <div className="address">
            <p>Main Outlet - C-507,<br /> New Sbzi Mandi, <br /> Azadpur, Delhi - 110033</p>
            <p>91xxxxxxxx</p>
          </div>
        </div>
        <div className="sec-4">
          <h3>Certifications</h3>
          <div className="trademarks">
            <img className='trademark' src={trademark} alt='trademark' />
            <img className='veg' src={veg} alt='veg' />
            
          </div>
        </div>
      </div>
      <p className='copyright'>Copyright ©2024 All rights reserved | Fruitporuim.com</p>
    </>
  )
}

export default Footer
