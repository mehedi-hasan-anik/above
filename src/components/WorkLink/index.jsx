import React, { useContext } from "react";
import { userContext } from "../../App";
import "./WorkLink.css";
import workData from "../../data/work-area.json";
import { NavLink } from "react-router-dom";

function WorkLink({ title }) {
  const [photoItems, setPhotoItems] = useContext(userContext);

  const photoHandler = (event) => {
    const photoName = event.target.textContent.toLowerCase();
    const selectedFood = workData.filter((item) => item.name === photoName);
    setPhotoItems(selectedFood);
  };

  return (
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
        {title}
      </NavLink>
    </li>
  );
}

export default WorkLink;
