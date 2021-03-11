import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import './App.sass';

import Notification from './components/Notification';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

import Search from './pages/Search';
import Saved from './pages/Saved';
import NoMatch from './pages/NoMatch';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Navbar />
            <Jumbotron />
            
            <Notification />
            <Switch>
              <Route exact path="/" component={ Search } />
              <Route exact path="/saved" component={ Saved } />
              <Route component={ NoMatch } />           
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;