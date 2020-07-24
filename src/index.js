import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import App from "./App";
import Projects from "./pages/Projects";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Projects}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);
