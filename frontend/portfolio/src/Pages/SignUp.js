import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css'; // Import your CSS file

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to server)
  };

  return (
    <div className="signup-form">
      <h2>Hi there!</h2>
      <p>Welcome to  Shutter Feeds </p>
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
        <div className="input-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="SignUp-btn" type="submit">Sign Up</button>
        <p>Already have an account?  <Link to="/sign-up">Log In</Link></p>
      </form>
    </div>
  );
};

export default SignUpForm;