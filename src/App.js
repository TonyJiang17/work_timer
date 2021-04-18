import logo from './logo.svg';
import './App.css';
import React from "react";


function App() {
  const [time, setTime] = React.useState(0)
  const [timerOn,setTimeOn] = React.useState(false)

  React.useEffect(() => {
    let interval = null; 

    if (timerOn){
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10)
      }, 10)
    }else{
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])

  return (
    <div className="App">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + (time / 10) % 100).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time == 0 && (
          <button onClick = {() => setTimeOn(true)}>Start</button>
        )}
        {timerOn && (
          <button onClick = {() => setTimeOn(false)}>Stop</button>
        )}

        {!timerOn && time != 0 && (
          <button onClick = {() => setTimeOn(true)}>Resume</button> 
        )}

        {!timerOn && time > 0 && (
          <button onClick = {() => setTime(0)}>Reset</button>
        )}
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
