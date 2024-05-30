import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './view/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FogotPass from './view/login/fogotPass/FogotPass'
import reportWebVitals from './reportWebVitals'
import Login from './view/login'
import Header from './view/layout/header'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

reportWebVitals()
