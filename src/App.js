import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Banner from './components/Banner/Banner';
import AboutInfo from './components/AboutInfo/AboutInfo';
import AboutImage from './components/AboutImage/AboutImage';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Banner />
        <AboutInfo />
        <AboutImage />
        <Portfolio />
        <Testimonials />

        <Footer />
      </div>
    );
  }
}

export default App;
