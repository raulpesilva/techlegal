import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Home from "./pages/home";
import Palestrantes from "./pages/palestrantes";

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Palestrantes" component={Palestrantes} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
