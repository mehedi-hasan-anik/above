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
      <a href="/www.facebook.com" target="_blank" title="facebook">
        <FontAwesomeIcon className="icon" icon={faFacebook} />
      </a>
      <a href="/www.twitter.com" target="_blank" title="twitter">
        <FontAwesomeIcon className="icon" icon={faTwitter} />
      </a>
      <a href="/www.linkedin.com" target="_blank" title="linkedin">
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </a>
      <a href="/www.google.com" target="_blank" title="google">
        <FontAwesomeIcon className="icon" icon={faGooglePlus} />
      </a>
      <a href="/www.youtube.com" target="_blank" title="youtube">
        <FontAwesomeIcon className="icon" icon={faYoutube} />
      </a>
      <a href="/www.bed.com" target="_blank" title="bed">
        <FontAwesomeIcon className="icon" icon={faBed} />
      </a>
      <a href="/www.calender.com" target="_blank" title="calender">
        <FontAwesomeIcon className="icon" icon={faCalendar} />
      </a>
      <a href="/www.dandd.com" target="_blank" title="dandd">
        <FontAwesomeIcon className="icon" icon={faDAndD} />
      </a>
    </div>
  );
}

export default SocialIcon;
