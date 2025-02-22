/* eslint-disable react/prop-types */
import { useState } from "react";
import "./login.css";
import { assets } from "../../assets/frontend_assets/assets";

const Login = ({ setLogin }) => {
  const [currstate, setCurrState] = useState("Signup");

  return (
    <div className="login">
      <form className="login-form">
        <div className="login-title">
          <h2>{currstate}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="text" placeholder="Your Email" required />
          <input type="Password" placeholder="Password" required />
        </div>
        <button>{currstate === "Signup" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrState("Signup")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
