import './App.css'
import logo from '../logo.svg'
import SideBar from './common/sidebar'
import React from 'react'
import './App.css'
import Schedule from './home/schedule/Calendar'
import Routers from '../router/Routers'
import { ThemeProvider, createTheme } from '@mui/material'
import Login from './login'
import FogotPass from './login/fogotPass/FogotPass'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/header'
import MyCourse from './home/mycourse/MyCourse'
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
  return (
    <Routes>
      <Route path="/" element={<MyCourse />} />
      <Route path="/ForgotPass" element={<FogotPass />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App
