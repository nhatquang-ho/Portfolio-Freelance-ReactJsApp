import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // or HashRouter
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter basename="/Portfolio-Freelance-ReactJsApp">
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
