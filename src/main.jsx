import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider >
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
