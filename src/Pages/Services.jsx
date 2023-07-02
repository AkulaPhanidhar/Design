import React from "react";
import Navbar from "../Components/Navbar";
import Service from "../Components/Services";
import Footer from "../Components/Footer";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../App.css";

const Services = () => {
  return (
    <>
      <div className="whatsapp">
        <BiLogoWhatsapp size={"50px"} color="aqua" className="iconClass" />
      </div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Service />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Services;
