import React from 'react';
import './style.css';

import GridSquare from '../GridSquare/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridSquare color="1" />
    </div>
  );
}

export default App;