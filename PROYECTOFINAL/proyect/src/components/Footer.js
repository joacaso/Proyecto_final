import React from 'react';
import './Style.css';

const Footer = () => {
  return (

    <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-logo">
          <img src="./img/logo-2.png" alt="Logo" className="logo" />
          </div>
          <ul className="contact-info">
            <li>+54 9 223 891 2398</li>
            <li>CortalaPipo@gmail.com</li>
            <li>Fake 1021, Mar del Plata</li>
          </ul>
        </div>
      </footer>
  );
};

export default Footer;
