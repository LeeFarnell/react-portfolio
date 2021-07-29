import React from "react";

import Loading from ".";

export default {
  title: "Components/Loading",
  component: Loading,
};

export const LoadingWithProps = (props) => <Loading {...props} />;

LoadingWithProps.args = {
  name: "Loading",
};
