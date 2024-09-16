import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; 
import Logo from '../Assets/Logo.jpg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
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
        <Link to="/sign-up"><button className="signup-btn">Sign Up</button></Link>
          <button className="profile-btn">Profile</button>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-section">
        <h1 className="main-title">Snap Happy</h1>
        <p className="subtitle">
          Unleash your inner photographer and join our vibrant community!
        </p>
        <button className="get-started-btn"><Link to="/sign-up">Get Started</Link></button>
      </main>

      <section className="call-to-action">
        <div className="cta-content">
          <h1>Capture, Share, Inspire, Repeat!</h1>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>


      {/* Floating Action Button */}
      <div className="floating-action-btn">
        <button className="add-btn">+</button>
      </div>
    </div>
  );
};

export default LandingPage;
