import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from './Component/Product/Product'

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Product/>} />
      </Routes>
    </div>
  );
}

export default Router;
