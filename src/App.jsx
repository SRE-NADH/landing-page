import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'

function App() {


  return (
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/signup' element={<SignUpPage/>}/>
       <Route path='/login' element={<LoginPage/>}/>
     </Routes>
  )
}

export default App
