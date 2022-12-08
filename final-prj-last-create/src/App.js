import "./App.css";
import { useEffect } from "react";
import Router from "./Router";
import Header from "./Header/Header";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = "var(--backgroung-img)";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
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
