import React from "react";
import "./Services.css";
import servicePhoto1 from "../image/img1.png";
import servicePhoto2 from "../image/img2.png";
import servicePhoto3 from "../image/img3.png";
import servicePhoto4 from "../image/arrow1.png";

function Services() {
  return (
    <div>
      <div className="services-section" id="services">
        <div className="container">
          <div className="services-header">
            <h3>services</h3>
            <p>
              This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio.{" "}
            </p>
          </div>
          <div className="services-sectiongrids row">
            <div className="col-md-4 services-grid">
              <img src={servicePhoto1} alt="" />
              <h4>webdesign</h4>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet.
              </p>
            </div>
            <div className="col-md-4 services-grid">
              <img src={servicePhoto2} alt="" />
              <h4>print design</h4>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet.
              </p>
            </div>
            <div className="col-md-4 services-grid">
              <img src={servicePhoto3} alt="" />
              <h4>web development</h4>
              <p>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet.
              </p>
            </div>
            <div className="clearfix"></div>
            <div className="arrow1">
              <a href="/" className="scroll">
                <img src={servicePhoto4} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
