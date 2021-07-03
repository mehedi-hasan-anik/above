import React from "react";
import "./AbouTextArea.css";
import AboutAreaPhoto1 from "../image/pic-9.jpg";

function AboutTextArea({ title, details1, details2 }) {
  return (
    <div>
      <div className="about-header">
        <h3>{title}</h3>
        <div className="about-imag">
          <img src={AboutAreaPhoto1} alt="" />
        </div>
        <div className="about-text">
          <p>{details1}</p>
          <p>{details2}</p>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default AboutTextArea;
