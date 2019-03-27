import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard/PortfolioCard';

import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <h1 className='heading-large heading-top'>My Work</h1>
        <div className='portfolio-cards'>
          <div className='portfolio-cards-row'>
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
          </div>
          <div className='portfolio-cards-row'>
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='DevConnector'
              content={contentArray}
            />
          </div>
        </div>
      </div>
    );
  }
}

const contentArray = ['its cool', 'its awesome', 'its the best'];

export default Portfolio;
