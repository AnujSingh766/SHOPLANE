import React, { useState } from 'react';
import '../styles/ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for handling the password reset submission
    console.log('Email submitted:', email);
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-card">
        <h2>Please Provide Your Registered Email id to Reset Password.</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="reset-button">Reset Password</button>
            <button className="login-signup-button">Login/Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
