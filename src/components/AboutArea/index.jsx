import React from "react";
import "./AboutArea.css";
import arrowPhoto from "../image/arrow1.png";
import AboutTextArea from "../AboutTextArea";
import Skill from "../Skill";

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
            <Skill title="GRAPHIC DESIGN" percentage="75%" />
            <Skill title="WEB DESIGN" percentage="75%" />
            <Skill title="UI/UX" percentage="75%" />
            <Skill title="BRANDING" percentage="75%" />
            <Skill title="LOGODESIGN" percentage="75%" />
            <Skill title="PHOTOGRAPHY" percentage="75%" />
            <Skill title="HTML/CSS" percentage="75%" />
            <Skill title="JQUERY" percentage="75%" />
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
