import React from 'react'
import ProductPage from './Component/Product/ProductPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./Component/Auth/LoginPage";

function Router() {
  return (
    <div className='route' >
        <Routes>
            <Route exact path='/' element={<LoginPage/>} />
            <Route exact path='/product' element={<ProductPage/>} />
        </Routes>
        {/* <LoginPage/> */}
    </div>
  )
}

export default Router