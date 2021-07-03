import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="banner_center">
            <h1>hello world,</h1>
            <h2>
              i am <span>graphic & web designer</span>
            </h2>
            <h2>from morocco</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="banner_center">
            <h1>Lorem Ipsum ,</h1>
            <h2>
              Contrary to <span>& designer</span>
            </h2>
            <h2>reproduced below</h2>
          </div>
        </div>
        <div className="carousel-item">
          <div className="banner_center">
            <h1>Content here,</h1>
            <h2>
              Lorem <span>graphic & designer</span>
            </h2>
            <h2>Contrary</h2>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
