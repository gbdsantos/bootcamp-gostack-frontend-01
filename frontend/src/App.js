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
      <Header title="Homepage" />
      <Header title="Projects" />
    </>
  );
}

export default App;
