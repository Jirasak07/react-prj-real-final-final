import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Login from './Login/Login';
import Product from './Page/Product/Product';
function Router() {
  return (
    <div>
      <Header/>  
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default Router