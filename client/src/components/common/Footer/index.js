import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';
import './style.css';

function Footer() {
  return (
    <div className="footer">
      <p className="follow ">تابـــــــعونـــــا</p>
      <div className="contact">
        <IoLogoWhatsapp className="icon" />
        <BsFacebook className="icon" />
        <AiFillInstagram className="icon" />
        <AiFillTwitterCircle className="icon" />
      </div>
      <p className="email">saydat.alard@gmail.com</p>
    </div>

  );
}

export default Footer;
