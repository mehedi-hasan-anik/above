import React from "react";

function Skill({ title, percentage }) {
  return (
    <div className="col-md-6 about-leftgrid">
      <div className="polls">
        <div className="poll">
          <div className="poll-desc">
            <h4>{title}</h4>
          </div>
          <div className="percentage">
            <p>{percentage}</p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="skills">
          <div style={{ width: "75%" }}> </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
