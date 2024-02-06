import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { library } from "@fortawesome/fontawesome-svg-core";
// eslint-disable-next-line import/no-extraneous-dependencies
import { fas } from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./contact.css";

library.add(fas);
function Contact() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`contact__container ${isActive ? "active" : ""}`}>
      <div className="contact__card">
        <div className="contact__card-img">
          <img src="../src/assets/moi.jpg" alt="" />
        </div>
        <h2 className="contact__name">
          Farid ZIAN <br />
          <span>Créateur du site</span>
        </h2>
      </div>
      <ul className="contact__list">
        <li className="conatact__li">
          <a className="contact__a" href="https://github.com/Farid-Zian">
            <FontAwesomeIcon icon={["fas", "stream"]} />
            <i className="fa" aria-hidden="true" />
            Github
          </a>
        </li>
        <li className="conatact__li">
          <a className="contact__a" href="http://linkedin.com/in/farid-zian">
            <FontAwesomeIcon icon={["fas", "stream"]} />
            <i className="fa " aria-hidden="true" />
            Linkedin
          </a>
        </li>
      </ul>
      <div className="contact__toggle" onClick={handleToggle}>
        <i className="fa fa-chevron-down" aria-hidden="true" />
      </div>
    </div>
  );
}

export default Contact;
