import React from "react";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../image/logo.png";

function Navigation() {
  return (
    <div className="full-nav-area">
      <nav className="navbar navbar-expand-lg   container">
        <div className="container-fluid nav-full-area">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse navigation-area"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link ms-3">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link ms-3">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#work" className="nav-link ms-3">
                  Work
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link ms-3">
                  {" "}
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link ms-3">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
