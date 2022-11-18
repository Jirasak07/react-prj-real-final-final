import React from "react";
import "./App.css";
import Header from "./Component/Head/Header";
import Product from "./Component/Product/Product";
import Router from "./Router";

function App() {
  return (
    <div className="fitapp">
      <Header/>
      <Router />
    </div>
  );
}

export default App;
