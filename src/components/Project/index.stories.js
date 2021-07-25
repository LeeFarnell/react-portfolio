import React from "react";

import Project from ".";

export default {
  title: "Components/Project",
  component: Project,
};

export const ProjectWithProps = (props) => <Project {...props} />;

ProjectWithProps.args = {
  name: "Project",
};
