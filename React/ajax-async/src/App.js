import React from 'react';
import logo from './logo.svg';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubInfo from './GithubInfo';

function App() {
  return (
    <div className="App">
      <ZenQuote />
      <h1>Github Users</h1>
      <GithubInfo userName="colt" />
      <GithubInfo userName="facebook" />
      <GithubInfo userName="gaearon" />
      <GithubInfo userName="sophiebits" />
    </div>
  );
}

export default App;
