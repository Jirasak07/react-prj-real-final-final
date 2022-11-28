import React, { useEffect } from "react";
import ProductPage from "./Component/Product/ProductPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Auth/LoginPage";
import { useLocation } from "react-router-dom";
import ShowProductDetail from "./Component/Product/ShowProductDetail";
import Scan from "./Component/Scan/Scan";
import ScanCheck from "./Component/Scan/ScanCheck";
import ScanUpdate from "./Component/Scan/ScanUpdate";
function Router() {
  const location = useLocation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const Auth = async () => {
      const data = await fetch("http://localhost:3333/auth", {
        method: "POST",
        headers: { Authorization: "Bearer " + token },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
          } else if (location.pathname === "/") {
          } else {
            window.location = "/";
          }
        });
    };
    Auth().catch(console.error);
  });
  return (
    <div className="route mt-2">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/product" element={<ProductPage />} />
        <Route exact path="/scan" element={<Scan/>} />
        <Route exact path="/scan-check" element={<ScanCheck/>} />
        <Route exact path="/scan-update" element={<ScanUpdate/>} />
        <Route exact path="/product-detail" element={<ShowProductDetail/>} />
      </Routes>
      {/* <LoginPage/> */}
    </div>
  );
}

export default Router;
