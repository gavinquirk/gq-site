import React, { Component } from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

import './NavBar.css';

class NavBar extends Component {
  state = {
    navColor: 'transparent'
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY <= 200) {
        this.setState({ navColor: 'transparent' });
      } else if (window.scrollY >= 200) {
        this.setState({ navColor: 'linear-gradient(#333, #000)' });
      }
    };
  }

  render() {
    return (
      <nav
        className='NavBar navbar-fixed-top'
        style={{ background: this.state.navColor }}
      >
        <i class='fab fa-galactic-republic' />
        <NavigationItems />
      </nav>
    );
  }
}

export default NavBar;
