import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PortfolioCard.css';

class PortfolioCard extends Component {
  render() {
    // Map through content prop array to create bullet points
    const cardContent = this.props.content.map((bp, i) => {
      return (
        <li key={i} style={{ padding: '3px' }}>
          <i
            style={{
              color: this.props.color,
              marginRight: '1rem'
            }}
            className='fas fa-circle'
          />
          {bp}
        </li>
      );
    });

    return (
      <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            {/* <h1>{this.props.heading}</h1> */}
            <img src={this.props.img} alt='' />
          </div>
          <div className='flip-card-back'>
            <h1>{this.props.heading}</h1>
            <ul className='flip-card-content'>{cardContent}</ul>
            <div className='flip-card-buttons'>
              {/* <Link to='http://www.google.com'>Google</Link> */}
              <a href='http://www.google.com' target='_blank'>
                Google
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioCard;
