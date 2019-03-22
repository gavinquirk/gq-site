import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';

import './NavigationItems.css';

export default function NavigationItems() {
  return (
    <ul className='NavigationItems'>
      <NavigationItem section='Home'>Home</NavigationItem>
      <NavigationItem section='SectionB'>SectionB</NavigationItem>
      <NavigationItem section='SectionC'>SectionC</NavigationItem>
    </ul>
  );
}
