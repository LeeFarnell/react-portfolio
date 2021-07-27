import { Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMePage";
import Portfolio from "./pages/PortfolioPage";
import ContactMe from "./pages/ContactMePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <ContactMe />
      </Route>
    </Switch>
  );
};

export default Routes;
