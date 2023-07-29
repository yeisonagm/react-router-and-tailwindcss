import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './routes/Home'
import Colors from './routes/Colors'
import Buttons from './routes/Buttons'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h2>Error</h2>,
  },
  {
    path: '/colors',
    element: <Colors />,
  },
  {
    path: '/buttons',
    element: <Buttons />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
