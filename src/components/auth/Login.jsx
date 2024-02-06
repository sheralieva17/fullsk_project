import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
      event.preventDefault();
      // Здесь вы можете выполнить логику для отправки данных на сервер
      console.log('Email:', email);
      console.log('Password:', password);
  };

  return (
      <div className="container">
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Login Form</h2>
          <form onSubmit={handleSubmit} className="form">
              <div className="input-group">
                  <label htmlFor="email" className="input-label">Email:</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      required
                  />
              </div>
              <div className="input-group">
                  <label htmlFor="password" className="input-label">Password:</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="input-field"
                      required
                  />
              </div>
              <button type="submit" className="submit-btn">Login</button>
          </form>
          <a href="forgot_password.php" className="forgot-password">Forgot Password?</a>
      </div>
  );
}

export default Login;
