import React from 'react';
import { render } from 'react-dom';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
};

export default Header;
