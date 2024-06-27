import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const SignUpform = () => {
  return (
    <div className="signup-container">
      <form className="signup-form" action="">
        <h2 className="text-[#333]">Sign Up</h2>
        <label className="block my-10" htmlFor="email">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="" id="" />
        </label>
        <button>Sign up</button>
        <br />
        <p>
          Already Registered? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpform;
