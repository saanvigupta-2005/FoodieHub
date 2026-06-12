import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-contents">
            <div className="footer-contents-left">
            <img src={assets.logo} alt="FoodieHub Logo" />
            <p>FoodieHub brings your favorite meals right to your doorstep. 
                Discover top-rated restaurants, explore diverse cuisines, and enjoy 
                fast, reliable delivery. We are committed to making every meal 
                convenient, delicious, and memorable.
                </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook"/>
                <img src={assets.twitter_icon} alt="Twitter"/>
                <img src={assets.linkedin_icon} alt="LinkedIn"/>
            </div>

        </div>
        <div className="footer-contents-centre">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                
            </ul>
            </div>
        <div className="footer-contents-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 98765 43210</li>
                <li>contact@foodiehub.com</li>
                

            </ul>
            
            </div>
      </div>
         <hr />
         <p className='copyright'>Copyright © 2026 FoodieHub. All rights reserved.</p>
        </div>

  )
}
export default Footer