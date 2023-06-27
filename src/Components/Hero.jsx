import React from "react";
import "../App.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="upperContainer">
          <div className="heroContainer">
            <p className="line1">
              <p className="subLine">Complete</p>
              <p className="subLine2">your profile</p>
              <p className="subLine">to see</p>
              <p className="subLine3">Eligible Universities</p>
            </p>
            <p className="line2">
              Provide your details like school, college, CGPA, test scores, etc
              to get best universities and recommendations for your Profile
            </p>
            <button className="button">Complete Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
