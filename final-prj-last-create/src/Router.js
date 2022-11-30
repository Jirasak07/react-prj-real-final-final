import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './Login/Login';
import Product from './Page/Product/Product';
function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Product/>} />
      </Routes>
    </div>
  )
}

export default Router