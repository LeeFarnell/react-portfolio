import React from "react";

import Navbar from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const MyComponentNameStory = (props) => <Navbar {...props} />;

MyComponentNameStory.args = {
  name: "Navbar",
};
