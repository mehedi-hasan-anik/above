import React from "react";

function WorkHeader({ title, details }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{details} </p>
    </div>
  );
}

export default WorkHeader;
