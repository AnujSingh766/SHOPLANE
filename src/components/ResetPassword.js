import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling the password reset submission
    console.log('Email submitted:', email);

    // Redirect to login page
    navigate('/login');
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2>Please Provide Your Registered Email ID to Reset Password.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="reset-button">Reset Password</button>
            <button type="button" className="login-signup-button" onClick={() => navigate('/login')}>
              Login/Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
