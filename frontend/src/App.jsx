import React, { useContext } from 'react'
import { Route, Routes, useLocation,Navigate } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import Nav from './components/Nav'
import { userDataContext } from './context/UserContext'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  const { userData } = useContext(userDataContext)
  let location = useLocation()
  return (
    <>
      {userData && <Nav />}
      <Routes>
        <Route path='/login' element={userData ? (<Navigate to={location.state?.from || "/"}/>) 
        : (<Login/>)  
      } />
        <Route path='/signup' element={userData ? (<Navigate to={location.state?.from || "/"}/>) 
        : (<Registration/>)  
      } />
        <Route path='/' element={userData ? <Home/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />

        <Route path='/about' element={userData ? <About/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />

        <Route path='/collection' element={userData ? <Collections/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />

        <Route path='/product'element={userData ? <Product/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />

        <Route path='/contact' element={userData ? <Contact/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />

        <Route path='/productdetail/:productId' element={userData ? <ProductDetail/> : <Navigate to={'/login'} state={{from : location.pathname}}/>} />
        
      </Routes>
    </>
  )
}

export default App
