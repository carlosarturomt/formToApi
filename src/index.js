import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './pages/home';
import Form from './pages/form';
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/formulario" component={Form} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
