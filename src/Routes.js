import { Switch, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMePage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutMe />
      </Route>
    </Switch>
  );
};

export default Routes;
