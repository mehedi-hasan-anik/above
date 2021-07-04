import React from "react";
import "./SinglePhoto.css";
import searchIcon from "../image/zoom-icon.png";

function SinglePhoto({ photo }) {
  return (
    <div className="col-md-3  singlePhoto  ">
      <div className="zoom-icon">
        <img src={searchIcon} alt="" />
      </div>
      <img src={photo} alt="" className="img-fluid" />
    </div>
  );
}

export default SinglePhoto;
