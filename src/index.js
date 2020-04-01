import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scss/styles.scss';

import App from './App';
import Projects from './pages/Projects';
import About from './pages/About';
import Cv from './pages/Cv';
import Contact from './pages/Contact';

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Projects}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/cv" component={Cv}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
