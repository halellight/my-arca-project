import React from "react";
import "./style.css";

const Login = () => {
  return (
    <div className="signup-container">
      <form className="signup-form" action="">
        <h2 className="text-[#333]">Log Up</h2>
        <label className="block my-10" htmlFor="email">
          Email:
          <input type="text" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" name="" id="" />
        </label>
        <button>Sign up</button>
        <p>
          Already Registered? <a>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
