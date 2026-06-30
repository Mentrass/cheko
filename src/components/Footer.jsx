import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-logo">
          CHEKO<span className="accent">ROOTS</span>
        </div>
        <p className="footer-text">
          Bringing sweet roots vibe and a strong message of love and consciousness.
        </p>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cheko Soto Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
