import React, { Component } from 'react';

import NavBar from './components/Navigation/NavBar';
import Banner from './components/Banner/Banner';
import AboutInfo from './components/AboutInfo/AboutInfo';
import AboutImage from './components/AboutImage/AboutImage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <Banner />
        <AboutInfo />
        <AboutImage />

        {/* <p className='TEST'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quae
          deserunt explicabo nulla alias corrupti! Cum, nisi repellat? Adipisci
          necessitatibus delectus iste, dolore ut voluptatibus deleniti enim
          tenetur expedita nulla? Molestias voluptatibus ducimus, eligendi,
          eveniet itaque veritatis voluptas ad ipsam, odit fuga recusandae
          necessitatibus? Cumque accusamus aut ad odio illum, ipsa neque,
          distinctio odit labore, dolore incidunt id? Expedita hic voluptatibus
          dignissimos at obcaecati eaque cupiditate omnis a quas ipsam.
          Recusandae animi quidem laborum veniam quaerat necessitatibus iste
          praesentium ex aperiam, similique incidunt ab fugiat? Magnam
          repudiandae rerum hic, eaque quasi, nesciunt voluptate, harum nobis
          odit at non libero accusantium.
        </p> */}
      </div>
    );
  }
}

export default App;
