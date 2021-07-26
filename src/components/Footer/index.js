import React from "react";

import "./index.css";

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name}
      <div className="footer-images">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          alt="LinkedIn"
          className="footer-image"
        ></img>
        <img
          src="https://image.flaticon.com/icons/png/512/38/38401.png"
          alt="GitHub"
          className="footer-image"
        ></img>
        <img
          src="https://image.flaticon.com/icons/png/512/145/145812.png"
          alt="Twitter"
          className="footer-image"
        ></img>
      </div>
    </footer>
  );
};

export default Footer;
