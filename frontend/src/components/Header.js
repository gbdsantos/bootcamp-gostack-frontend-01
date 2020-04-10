import React from 'react';
import { render } from 'react-dom';

function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
};

export default Header;
