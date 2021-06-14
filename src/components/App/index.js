import React from 'react';
import './style.css';

import GridBoard from '../GridBoard'
import NextBlock from '../NextBlock'
import ScoreBoard from '../ScoreBoard'
import Controls from '../Controls'
import MessagePopup from '../MessagePopup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <NextBlock></NextBlock>
      <GridBoard></GridBoard>
      <ScoreBoard></ScoreBoard>
      <Controls></Controls>
      <MessagePopup></MessagePopup>
    </div>
  );
}

export default App;