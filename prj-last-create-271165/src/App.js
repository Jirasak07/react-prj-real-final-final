import { useEffect } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Product from "./Component/Page/Product/Product";

function App() {
  useEffect(()=>{
    document.body.style.backgroundColor = "var(--sixty)"
  })
  return <div>
    <Header/>
    <Product  />
  </div>;
}

export default App;
