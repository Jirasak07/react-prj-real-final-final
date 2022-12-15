import { useEffect } from 'react';
import './App.css';
import Header from './Component/Head/Header';
import Dashboard from './Dashboard';
import axios from 'axios';

function App() {
  useEffect(()=>{
    document.body.style.backgroundColor= "#D2D7DF";
  })
  return (
    <div className="container-sm ">
      <Header/>
      <div className="content">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
