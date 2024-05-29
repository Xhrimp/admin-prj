import './App.css';
import logo from '../logo.svg'
import SideBar from './common/sidebar';
import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'
import Login from './login'
import FogotPass from './login/fogotPass/FogotPass'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layout/header';
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
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/ForgotPass" element={<FogotPass />} />
      <Route path="/Login" element={<Login />} />

    </Routes>
  );
}

export default App
