import axios from 'axios';
import React,{useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header/Header';
import Login from './Login/Login';
import TestValidate from './Page/FormValidate/TestValidate';
import Product from './Page/Product/Product';
function Router() {

  return (
    <div>
      <Header/>  
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Product  />} />
        <Route path='/test' element={<TestValidate/>} />
      </Routes>
    </div>
  )
}

export default Router