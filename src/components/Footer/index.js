import React from "react";

import "./index.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name}
      <div className="footer-images">
        <a
          href="https://www.linkedin.com/in/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/174/174857.png"
            alt="LinkedIn"
            className="footer-image"
          />
        </a>
        <a
          href="https://github.com/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/38/38401.png"
            alt="GitHub"
            className="footer-image"
          />
        </a>
        <a
          href="https://twitter.com/LeeFarnell"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://image.flaticon.com/icons/png/512/145/145812.png"
            alt="Twitter"
            className="footer-image"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
