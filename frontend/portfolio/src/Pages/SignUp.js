import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; 

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     };

  return (
    <div className="signup-container">
      {/* Left side: Form */}
      <div className="signup-form">
        <h2>Hi there!</h2>
        <p>Welcome to Shutter Feeds</p>
                <div className="divider">
                </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* New Confirm Password Field */}
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="SignUp-btn" type="submit">SignUp</button>
          <p>Already have an account? <Link to="/login">login</Link></p>
        </form>
      </div>

      {/* Right side: Background image */}
      <div className="signup-image">
        <div className="image-content">
          <h3>The Ultimate Photography Community</h3>
          <p>Share your work of art and explore that of others—all in one platform</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
