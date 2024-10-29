import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar/index.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
     <Navbar/>
     <App/>

    <Routes>
      <Route></Route>
    </Routes>
  </BrowserRouter>
    
  
)
