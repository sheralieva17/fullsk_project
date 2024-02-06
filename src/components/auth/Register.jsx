import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="form">
      <div className="form-panel two active">
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label>Status</label>
              <div>
                <input type="radio" id="house" name="residenceType" value="house" />
                <label htmlFor="house">House</label>
              </div>
              <div>
                <input type="radio" id="apartment" name="residenceType" value="apartment" />
                <label htmlFor="apartment">Seller</label>
              </div>
            </div>
            <div className="form-group">
              <button type="submit">Create an account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
