import React from "react";
import "./SinglePhoto.css";

function SinglePhoto({ photo }) {
  return (
    <div className="col-md-3 mb-4">
      <img src={photo} alt="" className="img-fluid" />
    </div>
  );
}

export default SinglePhoto;
