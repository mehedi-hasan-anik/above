import React from "react";
import "./Services.css";
import servicePhoto1 from "../image/img1.png";
import servicePhoto2 from "../image/img2.png";
import servicePhoto3 from "../image/img3.png";
import servicePhoto4 from "../image/arrow1.png";
import ServiceCol from "../ServiceCol";

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
            <ServiceCol
              image={servicePhoto1}
              title="webdesign"
              details="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet."
            />
            <ServiceCol
              image={servicePhoto2}
              title="print design"
              details="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet."
            />
            <ServiceCol
              image={servicePhoto3}
              title="web development"
              details="This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet."
            />

            <div className="clearfix"></div>
            <div className="arrow1">
              <a href="#contact" className="scroll">
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
