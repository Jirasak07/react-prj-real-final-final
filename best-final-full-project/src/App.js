import { useEffect, useState } from "react";
import "./App.css";
import Header from './Header/Header'
import Router from "./Router";
import axios from 'axios'


function App() {
  const URL = 'https://rest-api-jb.vercel.app/product'
  const [p,setP]= useState([])

  useEffect(()=>{
    document.body.style.backgroundColor = " #f0f2f5"
    axios.get(URL).then((res)=>{
      console.log(res.data[0])
      setP(res.data)
    })
  })
  return <>
<Header/>
{/* <div>
  {p.map((item)=>
<div>{item.pname}</div>
)}
</div> */}
<Router/>
  </>;
}

export default App;
