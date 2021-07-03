import React from "react";
import Header from "../Header";
import "./FullHomeArea.css";
import AboutArea from "../AboutArea";
import WorkArea from "../WorkArea";
import Services from "../Services";

function FullHomeArea() {
  return (
    <div>
      <Header />
      <AboutArea />
      <WorkArea />
      <Services />
    </div>
  );
}

export default FullHomeArea;
