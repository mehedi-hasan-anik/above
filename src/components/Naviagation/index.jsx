import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
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
                <Link className="nav-link ms-3" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/work">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-3" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link ms-3" to="/admin">
                  Admin
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link ms-3" to="/login">
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
