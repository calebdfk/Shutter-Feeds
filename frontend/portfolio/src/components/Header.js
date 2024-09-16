import React from 'react';
import Logo from '../Assets/Logo.jpg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className="logo-container">
          <img src= {Logo} alt="Shutter Logo" className="logo" />
          <span className="app-name">Shutter Feeds</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#posts">Posts</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <div className="auth-buttons">
          <button className="signup-btn"><Link to="/sign-up">Sign Up</Link></button>
          <button className="profile-btn">Profile</button>
        </div>
      </header>
  );
}

export default Header;