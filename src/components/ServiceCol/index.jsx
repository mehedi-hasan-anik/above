import React from "react";
import "./ServiceCol.css";

function ServiceCol({ image, title, details }) {
  return (
    <div className="col-md-4 services-grid">
      <img src={image} alt="" />
      <h4>{title}</h4>
      <p>{details}</p>
    </div>
  );
}

export default ServiceCol;
