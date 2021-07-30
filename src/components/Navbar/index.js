import React from "react";
import Button from "../Button";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">{props.name}</div>
      <div className="nav-btn">
        <a href="/">
          <Button name="About Me" />
        </a>
        <a href="/portfolio">
          <Button name="Portfolio" />
        </a>
        <a href="/contact">
          <Button name="Contact Me" />
        </a>
        <a
          href="https://drive.google.com/file/d/1CbYEpY4UwAvDuefGn6cRXP8PqmaxmAc4/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <Button name="Resume" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
