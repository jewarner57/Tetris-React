import React from 'react';
import './style.css';

import GridBoard from '../GridBoard/index'
import NextBlock from '../NextBlock/index'
import ScoreBoard from '../ScoreBoard/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <NextBlock></NextBlock>
      <GridBoard></GridBoard>
      <ScoreBoard></ScoreBoard>
    </div>
  );
}

export default App;