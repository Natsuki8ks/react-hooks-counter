import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(3)
  const [theme, setTheme] = useState('個です')

  function decrementCount() {
    if (count <= 0) {
      return
    }
    setCount(prevCount => prevCount - 1)
    setTheme('個に減りましたよ😓')
  }

  function increamentCount() {
    setCount(prevCount => prevCount + 1)
    setTheme('個に増えましたよ🥰')
  }

  return (
    <div className='main'>
      <h1>How much do you have?</h1>
      <div className='counter-text'>
        <div className='count'>{count}</div>
        <div className='theme' >{theme}</div>
      </div>
      <button className='btn d-btn' onClick={decrementCount}>-</button>
      <button className='btn i-btn' onClick={increamentCount}>+</button>
    </div>
  );
}

export default App;
