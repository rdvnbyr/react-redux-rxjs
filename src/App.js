import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormCo from './components/FormCo';
import {HeaderComponent} from './components/Header';
import {HomePage} from './components/Home';

function App() {
  return (
    <Router>
    <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={FormCo} />
      </Switch>
    </Router>
  );
}

export default App;
