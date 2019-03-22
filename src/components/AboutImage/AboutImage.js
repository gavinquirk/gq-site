import React, { Component } from 'react';

import gqDesk from '../../images/gq_desk.svg';

import './AboutImage.css';

class AboutImage extends Component {
  render() {
    return (
      <div className='AboutImage'>
        <img src={gqDesk} />
      </div>
    );
  }
}

export default AboutImage;
