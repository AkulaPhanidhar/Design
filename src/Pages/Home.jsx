import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import { BiLogoWhatsapp } from "react-icons/bi";
import "../App.css";

const Home = () => {
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
      <Hero />
      <Services />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
