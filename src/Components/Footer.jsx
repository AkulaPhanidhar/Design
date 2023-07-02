import React from "react";
import "../App.css";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
  BiLogoGmail,
} from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerBox">
          <p className="logo">PathfindersUK</p>
          <p className="footerTitle">Contact</p>
          <p className="strong">
            <p className="leftContent">Address :</p>
            <p className="footerContent" id="footerContent">
              114, Suchtra, Venkatesheara Colony, Jeedimetla, Hyderabad,
              Telangana, 500067
            </p>
          </p>
          <p className="strong">
            <p className="leftContent">Mail ID :</p>
            <p className="footerContent" id="footerContent">
              rakesh@pathfindersuk.com
            </p>
          </p>
          <p className="strong">
            <p className="leftContent">Phone NO :</p>
            <p className="footerContent" id="footerContent">
              +91 9010293128
            </p>
          </p>
          <p className="strong">
            <p className="leftContent">Hours :</p>
            <p className="footerContent" id="footerContent">
              10:00 - 18:00, Mon - Sat
            </p>
          </p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Company</p>
          <p className="footerContent">About US</p>
          <p className="footerContent">Services</p>
          <p className="footerContent">FAQ's</p>
          <p className="footerContent">Universities</p>
          <p className="footerContent">Profile</p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Services</p>
          <p className="footerContent">Visa Help</p>
          <p className="footerContent">Profile Review</p>
          <p className="footerContent">Resume</p>
          <p className="footerContent">LOR's</p>
          <p className="footerContent">Statement of Purpose</p>
        </div>

        <div className="footerBox">
          <p className="footerTitle">Follow US</p>
          <div className="iconContainer">
            <div className="icon">
              <BiLogoFacebook
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
            <div className="icon">
              <BiLogoLinkedin
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
            <div className="icon">
              <BiLogoInstagram
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
            <div className="icon">
              <BiLogoYoutube
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
            <div className="icon">
              <BiLogoTwitter
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
            <div className="icon">
              <BiLogoGmail
                size={"20px"}
                color="#E8FAF0"
                className="iconClass"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
