import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'
import Login from './login'

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
        <Login />
      </div>
    </ThemeProvider>
  )
}

export default App
