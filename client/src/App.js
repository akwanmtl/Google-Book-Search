import React, { Component } from 'react';
import './App.css';
import './App.sass';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

import Search from './pages/Search';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        
        <Search />
      </div>
    );
  }
}

export default App;