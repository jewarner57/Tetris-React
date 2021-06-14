import React from 'react';
import './style.css';

import GridBoard from '../GridBoard/index'
import NextBlock from '../NextBlock/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <NextBlock></NextBlock>
      <GridBoard></GridBoard>
    </div>
  );
}

export default App;