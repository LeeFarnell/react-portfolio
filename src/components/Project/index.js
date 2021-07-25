import React from "react";

import "./index.css";

const Project = (props) => {
  return (
    <div className="project-container">
      <div className="project-header">{props.name}</div>
      <div className="project-body">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          alt="code screen"
          className="project-image"
        />
        <p className="project-text">This is only a test.</p>
      </div>
    </div>
  );
};

export default Project;
