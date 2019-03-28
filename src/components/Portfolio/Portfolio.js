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
              heading='Phone Finder'
              content='An ecommerce application which uses PayPal to sell products'
              github='https://github.com/gavinquirk/react-ecommerce'
              deployed='www.google.com'
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='Dev Connector'
              content='A social media application which allows developers to connect and share.'
              github='https://github.com/gavinquirk/devconnector'
              deployed='https://gq-devconnector.herokuapp.com/'
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='Burger Builder'
              content='Choose your ingredients and purchase your customized burger'
              github='https://github.com/gavinquirk/burger-builder'
              deployed='https://react-burger-builder-35e0d.firebaseapp.com/'
            />
          </div>
          <div className='portfolio-cards-row'>
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='Natours'
              content='A landing page for a fictional nature tour company'
              github='https://github.com/gavinquirk/natours'
              deployed='https://gavinquirk.github.io/natours/'
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='Trillo'
              content='A page for a fictional travel booking company'
              github='https://github.com/gavinquirk/Trillo'
              deployed='https://gavinquirk.github.io/Trillo/'
            />
            <PortfolioCard
              img='https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png'
              heading='Nexter'
              content='An example website for a fictional real estate company'
              github='https://github.com/gavinquirk/nexter'
              deployed='https://gavinquirk.github.io/nexter/'
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
