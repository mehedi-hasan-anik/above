import React from "react";
import "./Header.css";
import Navigation from "../Naviagation";
import Slider from "../Slider";

function Header() {
  return (
    <div className="header-area">
      <Navigation />
      <Slider />
    </div>
  );
}

export default Header;
