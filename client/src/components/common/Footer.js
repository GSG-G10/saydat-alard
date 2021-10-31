import React from 'react';
import facebook from './image/facebook-logo.png';
import whatsapp from './image/whatsapp.png';
import twitter from './image/twitter.png';
import instagram from './image/instagram.png';
import '../../index.css';

function Footer() {
  return (
    <div className="footer">
      <p className="follow">FOLLOW US</p>
      <div className="contact">
        <img src={whatsapp} alt="whatsapp logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="facebook logo" />
        <img src={twitter} alt="facebook logo" />
      </div>
      <p className="email">saydat.alard@gmail.com</p>
    </div>

  );
}

export default Footer;
