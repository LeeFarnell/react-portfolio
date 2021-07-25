import React from "react";

import "./index.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="title">{props.name}</div>
    </div>
  );
};

export default Navbar;
