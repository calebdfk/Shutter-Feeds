// src/components/Layout.js
import React from 'react';
// import Landingpage from '../Pages/Landingpage'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Extract the Footer component from Landingpage if exported correctly
// const { Footer } = Landingpage;

const Layout = ({ children }) => {
  return (
    <div>
     <footer className="footer">
  <div className="footer-content">
    <p>&copy; 2024 Shutter Feeds. All rights reserved.</p>
    <div className="social-links">
      <a href="#facebook" className="social-icon">
        <span className="icon-text">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <span className="text">Facebook</span>
        </span>
      </a>
      <a href="#instagram" className="social-icon">
        <span className="icon-text">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span className="text">Instagram</span>
        </span>
      </a>
      <a href="#twitter" className="social-icon">
        <span className="icon-text">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <span className="text">Twitter</span>
        </span>
      </a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Layout;
