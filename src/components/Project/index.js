import React from "react";

import "./index.css";

const Project = (repo) => {
  // Create link to deployed app
  const appLink = repo.repo.homepage;

  const deployedApp = () => {
    if (!appLink) {
      return "";
    } else {
      return (
        <a href={appLink} target="_blank" rel="noreferrer">
          View Deployed Application
        </a>
      );
    }
  };

  // ---
  return (
    <div className="project-container" key={repo.repo.name}>
      <div className="project-header">{repo.repo.name}</div>
      <div className="project-body">
        <a href={repo.repo.svn_url} target="_blank" rel="noreferrer">
          <img
            src={`https://raw.githubusercontent.com/LeeFarnell/coding-bootcamp/master/app-screenshots/${repo.repo.name}.png`}
            alt="code screen"
            className="project-image"
          />
        </a>
        <div className="project-text">
          <div>{repo.repo.description}</div>
          <div className="dep-link">{deployedApp()}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
