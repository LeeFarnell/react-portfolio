import React from "react";

import Navbar from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

export const NavbarWithProps = (props) => <Navbar {...props} />;

NavbarWithProps.args = {
  name: "LEE FARNELL",
};
