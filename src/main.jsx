import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home.jsx'
import Generate from './Components/Generate.jsx'

// Create the router with your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/generate',
    element: <Generate />
  }
])

// Render the router within the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
