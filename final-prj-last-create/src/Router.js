
import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header/Header";
import Login from "./Login/Login";
import TestValidate from "./Page/FormValidate/TestValidate";
import Product from "./Page/Product/Product";
import ScanCheck from "./Page/ScanQrCodeMode/ScanCheck";
import ScanPageFnc from "./Page/ScanQrCodeMode/ScanPageFnc";
import ScanUpdate from "./Page/ScanQrCodeMode/ScanUpdate";
function Router() {
  return (
    <div>
      <Header />
      <div className="route" >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Product />} />
          <Route path="/scanpage" element={<ScanPageFnc/>} />
          <Route path="/test" element={<TestValidate />} />
          <Route path="/scancheck" element={<ScanCheck/>} />
          <Route path="/scanupdate" element={<ScanUpdate/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Router;
