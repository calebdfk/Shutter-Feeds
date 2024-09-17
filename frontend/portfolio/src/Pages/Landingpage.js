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
          <a href="/posts">Posts</a>
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
        <Link to="/sign-up"><button className="get-started-btn">Get Started</button></Link>
      </main>

      <section className="call-to-action">
        <div className="cta-content">
          <h1>Capture, Share, Inspire, Repeat!</h1>
          <button className="cta-button">Explore Now</button>
        </div>
      </section>


      {/* Floating Action Button */}
      {/* <div className="floating-action-btn">
        <button className="add-btn">+</button>
      </div> */}

      <section className="features">
  <h2>Why Shutter Feeds?</h2>
  <div className="feature-list">
    <div className="feature-item">
      <h3>Share Your Moments</h3>
      <p>Upload and share your favorite photos with a passionate community.</p>
    </div>
    <div className="feature-item">
      <h3>Discover Inspiration</h3>
      <p>Explore curated galleries and find inspiration for your next shot.</p>
    </div>
    <div className="feature-item">
      <h3>Get Feedback</h3>
      <p>Receive constructive feedback and tips from fellow photographers.</p>
    </div>
  </div>
</section>

<section className="testimonials">
  <h2>What Our Users Say</h2>
  <div className="testimonial-list">
    <div className="testimonial-item">
      <p>"Shutter Feeds has rekindled my love for photography!"</p>
      <span>- Caleb Kend</span>
    </div>
    <div className="testimonial-item">
      <p>"A fantastic platform for photographers of all levels."</p>
      <span>- Rhys Larsen</span>
    </div>
  </div>
</section>

<section className="faq">
  <h2>FAQs</h2>
  <div className="faq-item">
    <h3>How do I upload my photos?</h3>
    <p>You can upload photos by signing up and navigating to the 'posts' section in your profile.</p>
  </div>
  </section>

  <section className="newsletter">
  <h2>Stay Updated</h2>
  <p>Subscribe to our newsletter to get the latest updates.</p>
  <form className="newsletter-form">
    <input type="email" placeholder="Enter your email" />
    <button type="submit">Subscribe</button>
  </form>
</section>

  <footer className="footer">
  <div className="footer-content">
    <p>&copy; 2024 Shutter Feeds. All rights reserved.</p>
    <div className="social-links">
      <a href="#facebook">Facebook</a>
      <a href="#instagram">Instagram</a>
      <a href="#twitter">Twitter</a>
    </div>
  </div>
</footer>

    </div>
  );
};

export default LandingPage;
