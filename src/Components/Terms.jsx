import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="termsAndConditions">
      <label className="checkBoxLabel">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkBoxInput"
        />
        <p className="checkBoxCustom"></p>
        <p className="checkBoxText">
          I agree to the{" "}
          <Link to={"/"} className="term">
            Terms and Conditions
          </Link>
        </p>
      </label>
    </div>
  );
};

export default Terms;
