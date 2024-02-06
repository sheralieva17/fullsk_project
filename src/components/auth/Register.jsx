import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="form-reg">
      <div className="form-panel-reg two active">
        <div className="form-header-reg">
          <h1>Register Account</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group-reg">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group-reg">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group-reg">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group-reg">
              <label htmlFor="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required />
            </div>
            <div className="form-group-reg">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group-reg">
              <label>Status</label>
              <div>
                <input type="radio" id="buyer" name="residenceType" value="buyer" />
                <label htmlFor="buyer">Buyer</label>
              </div>
              <div>
                <input type="radio" id="seller" name="residenceType" value="seller" />
                <label htmlFor="seller">Seller</label>
              </div>
            </div>
            <div className="form-group-reg">
              <button type="submit">Create an account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
