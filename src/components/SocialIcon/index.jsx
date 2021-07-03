import React from "react";
import "./SocialIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar } from "@fortawesome/free-solid-svg-icons";
import {
  faDAndD,
  faFacebook,
  faGooglePlus,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcon() {
  return (
    <div className="social-icon">
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faGooglePlus} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faYoutube} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faBed} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faCalendar} />
      </a>
      <a href="/">
        <FontAwesomeIcon className="icon" icon={faDAndD} />
      </a>
    </div>
  );
}

export default SocialIcon;
