import React from 'react'
import'./Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt='logo' />
            <p>SHOPPER</p>

        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
               <img src={instagram} alt='instagram' />
               <img src={pintester} alt='pintester' />
               <img src={whatsapp} alt='whatsapp' />
            </div>
             </div>

            <div className="footer-copyright">  
            <hr/>
            <p> CopyRight© 2024 SHOPPER. All rights reserved.</p></div>
          
       
          

    </div>
  )
}

export default Footer