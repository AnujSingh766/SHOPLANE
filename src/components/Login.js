import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (email === "test@example.com" && password === "password123") {
      // On successful login, navigate to ProductCard page
      navigate('/ProductCard');
    } else {
      // Show error message if credentials are incorrect
      setError("Invalid email or password. Please try again.");
    }
  };

  // Handle Forgot Password Redirection
  const handleResetPassword = () => {
    navigate('/ResetPassword'); 
  };
  const handleSignUp = () => {
    navigate('/'); 
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="tab-buttons">
          <button className="tab active">LOGIN</button>
          <button className="tab" onClick={handleSignUp}>SIGNUP</button>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email id"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="/ResetPassword" className="forgot-password" onClick={handleResetPassword}>Forgot Password</a>
          </div>

          {error && <p className="error-message">{error}</p>} {/* Display error message */}

          <button type="submit" className="login-button">LOG ME IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
