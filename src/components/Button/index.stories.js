import React from "react";

import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
};

export const ButtonWithProps = (props) => <Button {...props} />;

ButtonWithProps.args = {
  name: "ABOUT",
};
