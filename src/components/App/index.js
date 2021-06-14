import React from 'react';
import './style.css';

import GridBoard from '../GridBoard/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard></GridBoard>
    </div>
  );
}

export default App;