import React from 'react';
import './App.scss';
import Main from './components/Main'
import Userpage from './components/Userpage'
import Auth from "./hoc/auth";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/user" component={Userpage} />
      </Switch>
    </Router>
  );
}

export default App;
