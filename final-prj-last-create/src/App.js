import "./App.css";
import { useEffect } from "react";
import Router from "./Router";
import Header from "./Header/Header";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--background)";
    console.log("app")
  });

  return (
    <>
      <div className="router">
        <Router />
      </div>
    </>
  );
}

export default App;
