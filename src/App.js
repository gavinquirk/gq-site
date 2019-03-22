import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Banner from './components/Banner/Banner';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default App;
