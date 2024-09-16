import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
     };

  return (
    <div className="Login-container">
      {/* Left side: Form */}
      <div className="Login-form">
        <h2>Hi there!</h2>
        <p>Welcome to Shutter Feeds</p>
                <div className="divider">
                </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="example@1234.com"
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
              placeholder="xxxx"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="Login-btn" type="submit">Login</button>
          <p>Don't have an account? <Link to="/sign-up">SignUp</Link></p>
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

export default LoginForm;
