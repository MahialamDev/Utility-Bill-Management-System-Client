import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/RootRouter.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} def />
      </ThemeProvider>
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
)
