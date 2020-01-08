import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import Toggler from './Toggler';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      <SWMovies />
      <p>-------------------------</p>
      <CounterClass />
      <p>-------------------------</p>
      <CounterHooks />
      <p>-------------------------</p>
      <Toggler />
      <p>-------------------------</p>
    </div>
  );
}

export default App;
