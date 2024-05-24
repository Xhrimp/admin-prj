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
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Login /> */}
        <FogotPass />
      </div>
    </ThemeProvider>
  )
}

export default App
