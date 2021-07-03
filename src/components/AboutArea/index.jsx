import React from "react";
import "./AboutArea.css";
import aboutdata from "../../data/about-area.json";
import arrowPhoto from "../image/arrow1.png";
import AboutTextArea from "../AboutTextArea";

function AboutArea() {
  return (
    <div>
      <div className="about-section" id="about">
        <div className="container">
          <AboutTextArea
            title="about"
            details1="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio."
            details2="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris."
          />
          <div className="about-sectiongrids row">
            {aboutdata.map((item) => (
              <div key={item.id} className="col-md-6 about-leftgrid">
                <div key={item.id} className="polls">
                  <div className="poll">
                    <div className="poll-desc">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="percentage">
                      <p>{item.percentage}</p>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <div className="skills">
                    <div style={{ width: "75%" }}> </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="clearfix"></div>
          </div>
          <div className="arrow1">
            <a href="#work" className="scroll">
              <img src={arrowPhoto} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutArea;
