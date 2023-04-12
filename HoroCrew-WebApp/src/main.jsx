import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./main.css"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './context/AuthContext'
import { IconContext } from 'react-icons'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
