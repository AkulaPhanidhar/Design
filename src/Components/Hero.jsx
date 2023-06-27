import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroContainer">
          <p className="line1">
            Complete your Profile to see eligible universities
          </p>
          <p className="line2">
            Provide your details like school, college, CGPA, test scores, etc to
            get best universities and recommendations for your Profile
          </p>
          <button className="button">Complete Profile</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
