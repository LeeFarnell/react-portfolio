import React from "react";
import Button from "../Button";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">{props.name}</div>
      <div>
        <Button name="About Me" />
        <Button name="Portfolio" />
        <Button name="Contact Me" />
        <Button name="Resume" />
      </div>
    </div>
  );
};

export default Navbar;
