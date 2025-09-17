import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
    <Nav/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Registration/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes> 
    </>
  )
}

export default App
