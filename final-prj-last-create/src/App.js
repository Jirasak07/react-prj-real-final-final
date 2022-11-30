import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Header from "./Header/Header";
import Router from "./Router";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--background)";
  });
  return (
    <div className="App" >
      <Header />
      <div className="router">
        <Router/>
      </div>
    </div>
  );
}

export default App;
