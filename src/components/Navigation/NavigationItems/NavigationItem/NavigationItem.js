import React from 'react';

import './NavigationItem.css';

export default function NavigationItem(props) {
  return <li className='NavigationItem'>{props.children}</li>;
}
