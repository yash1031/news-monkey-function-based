import "./App.css";
import React, {useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import {
  Outlet
} from "react-router-dom"

const App=()=>{
   return (  
     <div >
        <Navbar />
        <Outlet></Outlet>
     </div>
  )
}
export default App
