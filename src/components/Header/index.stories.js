import React from "react";

import Header from ".";

export default {
  title: "Components/Header",
  component: Header,
};

export const HeaderWithProps = (props) => <Header {...props} />;

HeaderWithProps.args = {
  name: "Header",
};
