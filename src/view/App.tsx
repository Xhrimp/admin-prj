import './App.css';
import logo from '../logo.svg'
import SideBar from './common/sidebar';
import React from 'react'
import './App.css'
import Schedule from './home/schedule/Calendar';
import Routers from '../router/Routers';
import { ThemeProvider, createTheme } from '@mui/material'
import Login from './login'
import FogotPass from './login/fogotPass/FogotPass'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Header from './layout/header';
import PublicKma from './home/publicKma/PublicKma';
import Calendar from './home/schedule/Calendar';
import Footer from './common/footer/Footer';
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
    <>

      <Routers />
      <Footer />



    </>
  );
}

export default App
