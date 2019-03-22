import React, { Component } from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

import './NavBar.css';

class NavBar extends Component {
  state = {
    navColor: 'transparent',
    boxShadow: 'none'
  };

  componentDidMount() {
    window.onscroll = () => {
      if (window.scrollY <= 200) {
        this.setState({ navColor: 'transparent', boxShadow: 'none' });
      } else if (window.scrollY >= 200) {
        this.setState({
          navColor: 'linear-gradient(#586874, #1d2c33)',
          boxShadow: '0px 1px 20px 1px rgba(41, 41, 41, 0.5)'
        });
      }
    };
  }

  render() {
    return (
      <nav
        className='NavBar navbar-fixed-top'
        style={{
          background: this.state.navColor,
          boxShadow: this.state.boxShadow
        }}
      >
        <i className='fab fa-galactic-republic' />
        <NavigationItems />
      </nav>
    );
  }
}

export default NavBar;
