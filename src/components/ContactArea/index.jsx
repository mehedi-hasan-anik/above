import React from "react";
import "./ContactArea.css";
import Footer from "../Footer";
import SocialIcon from "../SocialIcon";
import ContactForm from "../ContactForm";

function ContactArea() {
  return (
    <div className="footer-section" id="contact">
      <div className="container">
        <div className="contact-header">
          <h3> contact</h3>
          <p>
            This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio.{" "}
          </p>
        </div>
        <SocialIcon />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default ContactArea;
