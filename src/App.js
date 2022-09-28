import './App.css';
import React from 'react';

function App() {

  const [counter, setCounter] = React.useState(0)

  function onClickMinus() {
    setCounter(counter - 1)
  }

  function onClickPlus() {
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        This is a very simple counter app
      </header>
      <section className='main'>
        <div className='main_text'>
          <p>COUNTER</p>
          <p className='main_text_counter'>{counter}</p>
          </div>
        <div className='main_buttons'>
          <button onClick={onClickMinus} className=' button minus_button'>
            -
          </button>
          <button onClick={onClickPlus} className='button plus_button'>
            +
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
