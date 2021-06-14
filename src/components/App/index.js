import React, { useEffect } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../reducers'
import useSound from 'use-sound';
import tetrisTheme from '../../tetrisTheme.mp3';

import './style.css';

import GridBoard from '../GridBoard'
import NextBlock from '../NextBlock'
import ScoreBoard from '../ScoreBoard'
import Controls from '../Controls'
import MessagePopup from '../MessagePopup';

const store = createStore(reducers)

function App() {
  const [play] = useSound(tetrisTheme, { volume: 0.25 });

  useEffect(() => {
    play()
  }, [play])

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;