import React from "react";
import Navbar from "../Components/Navbar";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../App.css";

const About = () => {
  return (
    <>
      <div className="whatsapp">
        <BiLogoWhatsapp size={"50px"} color="aqua" className="iconClass" />
      </div>
      <Navbar />
    </>
  );
};

export default About;
