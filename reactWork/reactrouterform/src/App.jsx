import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes } from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import Register from './component/register'
import Mainlayout from './component/mainlayout'





function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h2>awersdhfjgvhb</h2> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Mainlayout/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
