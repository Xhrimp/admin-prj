import './App.css'
import logo from '../logo.svg'
import SideBar from './common/sidebar'
import React from 'react'
import './App.css'
import Schedule from './home/schedule/Calendar'
import Routers from '../router/Routers'
import { Box, Divider, ThemeProvider, createTheme } from '@mui/material'
import Login from './login'
import FogotPass from './login/fogotPass/FogotPass'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Header from './layout/header'
import PublicKma from './home/publicKma/PublicKma'
import Calendar from './home/schedule/Calendar'
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
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
        }}
      >
        <SideBar />
        <Divider orientation="vertical" variant="middle" flexItem />
        <Routers />
      </Box>
    </>
  )
}

export default App
