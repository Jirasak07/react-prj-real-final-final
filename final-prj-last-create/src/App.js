import "./App.css";
import { useEffect } from "react";
import Router from "./Router";
import Header from "./Header/Header";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "var(--backgroung-img)";
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
