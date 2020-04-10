import React from 'react';

import Header from './components/Header';

/**
 * Os três conceitos essencias do React:
 * 
 * Componente
 * Propriedade
 * Estado
*/

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
