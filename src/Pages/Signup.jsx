import React from "react";
import "../App.css";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Terms from "../Components/Terms";

const Signup = () => {
  return (
    <>
      <div className="login">
        <Link to={"/"}>
          <button className="backButton">
            <HiArrowNarrowLeft className="arrow" size={"25px"} />
          </button>
        </Link>
        <div className="loginContainer">
          <p className="loginText">Sign UP</p>
          <div className="inputContainer">
            <div className="nameContainer">
              <input
                className="loginInput"
                type="text"
                placeholder="First Name"
                required
              />
              <input
                className="loginInput"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
            <input
              className="loginInput"
              type="number"
              placeholder="Phone Number"
              required
            />
            <input
              className="loginInput"
              type="mail"
              placeholder="Mail ID"
              required
            />
            <input
              className="loginInput"
              type="password"
              placeholder="New Password"
              required
            />
          </div>
          <div className="buttonContainer">
            <Terms />
            <button onClick={""} className="button" id="button">
              Get OTP
            </button>
            <p className="account">
              Already have an account ?{" "}
              <Link to={"/login"} className="link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
