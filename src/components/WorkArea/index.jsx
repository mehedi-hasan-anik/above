import React, { useEffect, useState } from "react";
import "./WorkArea.css";
import aroowIcon from "../image/arrow1.png";
import workData from "../../data/work-area.json";
import { NavLink } from "react-router-dom";
import SinglePhoto from "../SinglePhoto";

function WorkArea() {
  const [photoItems, setPhotoItems] = useState([]);

  useEffect(() => {
    setPhotoItems(workData.slice(0, 8));
  }, []);

  const photoHandler = (event) => {
    const photoName = event.target.textContent.toLowerCase();
    const selectedFood = workData.filter((item) => item.name === photoName);
    setPhotoItems(selectedFood);
  };
  return (
    <div>
      <div className="works-section" id="work">
        <div className="works-header">
          <h3>works</h3>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio.{" "}
          </p>
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
                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="selected"
                        onClick={photoHandler}
                        className="tm-paging-link"
                      >
                        ALL
                      </NavLink>
                    </li>

                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="selected"
                        onClick={photoHandler}
                        className="tm-paging-link"
                      >
                        BRANDING
                      </NavLink>
                    </li>

                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="selected"
                        onClick={photoHandler}
                        className="tm-paging-link"
                      >
                        PRINT
                      </NavLink>
                    </li>
                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="selected"
                        onClick={photoHandler}
                        className="tm-paging-link"
                      >
                        WEB DESIGN
                      </NavLink>
                    </li>
                    <li
                      className="resp-tab-item resp-tab-active"
                      aria-controls="tab_item-0"
                      role="tab"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="selected"
                        onClick={photoHandler}
                        className="tm-paging-link"
                      >
                        PHOTOGRAPHY
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <div className="row photo-gallary">
                  {photoItems &&
                    photoItems.map((item) => (
                      <SinglePhoto
                        key={item.id}
                        name={item.title}
                        photo={item.photo}
                      />
                    ))}
                </div>
              </div>
            </div>

            <div className="arrow">
              <a href="/" className="scroll">
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
