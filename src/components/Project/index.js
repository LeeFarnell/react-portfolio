import React from "react";

import "./index.css";

const Project = (repo) => {
  console.log(repo.repo);
  return (
    <div className="project-container">
      <div className="project-header">{repo.repo.name}</div>
      <div className="project-body">
        <a href={repo.repo.svn_url} target="_blank" rel="noreferrer">
          <img
            src={`https://raw.githubusercontent.com/LeeFarnell/coding-bootcamp/master/app-screenshots/${repo.repo.name}.png`}
            alt="code screen"
            className="project-image"
          />
        </a>
        <p className="project-text">
          {repo.repo.description} <br />
          <a href={repo.repo.homepage} target="_blank" rel="noreferrer">
            Deployed Application
          </a>
        </p>
      </div>
    </div>
  );
};

export default Project;
