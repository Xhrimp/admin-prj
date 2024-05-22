import React from 'react';
import './App.css';
import logo from '../logo.svg'
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch {...label} defaultChecked />
        <Button>abc</Button>
      </header>
    </div>
  );
}

export default App;
