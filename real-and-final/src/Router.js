import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from './Component/Product/Product'
import User_Add from "./Component/User/User_Add";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/product" element={<Product/>} />
        <Route path="/user" element={<User_Add/>} />
      </Routes>
    </div>
  );
}

export default Router;
