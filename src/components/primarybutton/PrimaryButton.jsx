import React from "react";
import "./PrimaryButton.css";

const PrimaryButton = ({ btnText, handleClick }) => {
  return (
    <button className="primary-btn" onClick={handleClick}>
      <span>{btnText}</span>
    </button>
  );
};

export default PrimaryButton;
