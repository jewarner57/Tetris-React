import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { moveDown, moveLeft, moveRight, rotate } from '../../actions'

import './style.css'


export default function Controls(props) {
  const dispatch = useDispatch()
  const isRunning = useSelector((state) => state.game.isRunning)
  const gameOver = useSelector((state) => state.game.gameOver)

  const keyPressed = useCallback((e) => {
    console.log(e.key)
    switch (e.key) {
      case 'ArrowUp':
      case 'w':
        dispatch(rotate())
        break;
      case 'ArrowDown':
      case 's':
        dispatch(moveDown())
        break;
      case 'ArrowLeft':
      case 'a':
        dispatch(moveLeft())
        break;
      case 'ArrowRight':
      case 'd':
        dispatch(moveRight())
        break;
      default:
        break;
    }
  }, [dispatch])

  useEffect(() => {
    document.addEventListener("keydown", keyPressed, false);

    return () => {
      document.removeEventListener("keydown", keyPressed, false);
    };
  }, [keyPressed]);

  return (
    <div className={`controls`}>
      {/* left */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveLeft())
        }}>Left</button>

      {/* right */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveRight())
        }}>Right</button>

      {/* rotate */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(rotate())
        }}>Rotate</button>

      {/* down */}
      <button
        disabled={!isRunning || gameOver}
        className="control-button"
        onClick={(e) => {
          if (!isRunning || gameOver) { return }
          dispatch(moveDown())
        }}>Down</button>

    </div>
  )
}