import React from "react";
import "./Footer.scss";
import "../App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  const love = (
    <FontAwesomeIcon className="icon-love" icon={faHeart}></FontAwesomeIcon>
  );

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/lalit-m-a7bbb54a/");
  };
  const Instagram = () => {
    window.open("https://www.instagram.com/saitradingco/");
  };
  const Facebook = () => {
    window.open("https://www.facebook.com/SaiTradingCompany");
  };
  return (
    <div className="footer-container main-div">
      <div>
        <div className="social-icons">
          <span>
            <FontAwesomeIcon
              className="social-handle-icon lin"
              icon={faLinkedin}
              onClick={linkedIn}
            />
          </span>
          <span>
            <FontAwesomeIcon
              className="social-handle-icon iin"
              icon={faInstagram}
              onClick={Instagram}
            />
          </span>
          <span>
            <FontAwesomeIcon
              className="social-handle-icon fin"
              icon={faFacebook}
              onClick={Facebook}
            />
          </span>
        </div>
      </div>
      <div>
        <div className="corporation stc-display-inline-block">
          © Lalit Mehra
        </div>
        <div className="footer-love stc-display-inline-block">
          <div>Made with {love} by Pankaj and Mohit</div>
        </div>
      </div>
    </div>
  );
};
