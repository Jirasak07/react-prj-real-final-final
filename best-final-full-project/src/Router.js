import React, { useEffect } from "react";
import ProductPage from "./Component/Product/ProductPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Component/Auth/LoginPage";
import { useLocation } from "react-router-dom";
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
    <div className="route mt-4">
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/product" element={<ProductPage />} />
      </Routes>
      {/* <LoginPage/> */}
    </div>
  );
}

export default Router;
