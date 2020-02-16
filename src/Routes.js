import React from "react";
import { StaticRouter as Router, Route, Switch } from "react-router-dom";

import GlobalStyles from "styles/global";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <div>Default Page</div>} />
      </Switch>
      <GlobalStyles />
    </Router>
  );
};

export default Routes;
