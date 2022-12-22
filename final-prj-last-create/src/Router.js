import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Login from "./Login/Login";
import TestValidate from "./Page/FormValidate/TestValidate";
import CheckProduct from "./Page/ManageProduct/CheckProduct";
import UpdateProduct from "./Page/ManageProduct/UpdateProduct";
import Product from "./Page/Product/Product";
import ScanPageFnc from "./Page/ScanQrCodeMode/ScanPageFnc";
import ScanQR from "./Page/ScanQrCodeMode/ScanQR";
function Router() {
  return (
    <div>
      <Header />
      <div className="route">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Product />} />
          <Route path="/scanpage" element={<ScanPageFnc />} />
          <Route path="/test" element={<ScanQR/>} />
          <Route path="/check" element={<CheckProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
