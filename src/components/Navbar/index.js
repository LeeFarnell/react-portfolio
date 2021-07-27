import React from "react";
import Button from "../Button";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">{props.name}</div>
      <div>
        <a href="/">
          <Button name="About Me" />
        </a>
        <a href="/portfolio">
          <Button name="Portfolio" />
        </a>
        <Button name="Contact Me" />
        <Button name="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
