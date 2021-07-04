import React from "react";
import "./WorkArea.css";
import aroowIcon from "../image/arrow1.png";
import WorkHeader from "../WorkHeader";
import PhotoGallary from "../PhotoGallary";
import WorkLink from "../WorkLink";

function WorkArea() {
  return (
    <div>
      <div className="works-section" id="work">
        <div className="works-header">
          <WorkHeader
            title="works"
            details=" This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio."
          />
        </div>
        <div className="portfolio-section-bottom-row" id="portfolio">
          <div className="container">
            <div className="sap_tabs">
              <div
                id="horizontalTab"
                style={{ display: "block", width: "100%", margin: "0px" }}
              >
                <nav className="resp-tabs-list">
                  <ul>
                    <WorkLink title="ALL" />
                    <WorkLink title="BRANDING" />
                    <WorkLink title="PRINT" />
                    <WorkLink title="WEB DESIGN" />
                    <WorkLink title="PHOTOGRAPHYL" />
                  </ul>
                </nav>
                <PhotoGallary />
              </div>
            </div>

            <div className="arrow">
              <a href="#services" className="scroll">
                <img src={aroowIcon} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkArea;
