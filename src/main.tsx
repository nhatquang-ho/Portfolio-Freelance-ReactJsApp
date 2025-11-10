import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import './i18n'

const router = createBrowserRouter(
  [
    // Root uses a wildcard so nested <Routes> inside the App can match deeper paths
    { path: '*', element: <App /> },
  ],
  {
    basename: '/Portfolio-Freelance-ReactJsApp',
    future: { v7_startTransition: true, v7_relativeSplatPath: true } as any
  }
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
)
