import { Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMePage";
import Portfolio from "./pages/PortfolioPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
  );
};

export default Routes;
