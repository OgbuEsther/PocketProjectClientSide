import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { MainRoute } from './routes/AllRoutes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <RouterProvider router={MainRoute}/>
  </React.StrictMode>,
)
