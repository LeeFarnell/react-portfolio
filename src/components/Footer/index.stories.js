import React from "react";

import Footer from ".";

export default {
  title: "Components/Footer",
  component: Footer,
};

export const FooterWithProps = (props) => <Footer {...props} />;

FooterWithProps.args = {
  name: "Footer",
};
