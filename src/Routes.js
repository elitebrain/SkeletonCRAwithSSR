import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./components/pages";
import About from "./components/pages/about";

import GlobalStyles from "./styles/global";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
      </Switch>
      <GlobalStyles />
    </>
  );
};

export default Routes;
