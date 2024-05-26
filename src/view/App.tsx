import './App.css';
import logo from '../logo.svg'
import SideBar from './common/sidebar';
import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'
import Login from './login'
import FogotPass from './login/fogotPass/FogotPass'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
        fontFamily: 'Roboto, sans-serif',
      },
    },
  },
})

function App() {
  // const label = { inputProps: { 'aria-label': 'Switch demo' } };
 
  return (
    <div className="App" style={{background: '#fff'}}>
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
        <div>
          <SideBar/>
        </div>
        <ThemeProvider theme={theme}>
          <div className="App">
           {/* <Login /> */}
          <FogotPass />
          </div>
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App
