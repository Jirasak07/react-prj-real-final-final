import React from 'react'
import ProductPage from './Component/Product/ProductPage'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <div>
        <Routes>
            <Route path='/product' element={<ProductPage/>} />
        </Routes>
    </div>
  )
}

export default Router