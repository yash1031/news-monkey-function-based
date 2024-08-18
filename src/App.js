import "./App.css";
import React, {useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";  
import LoadingBar from 'react-top-loading-bar'
const App=()=>{
  let apikey=process.env.REACT_APP_NEWS_API
  let[progress,setProgress]=useState(0);
  const[country,setCountry]=useState('in');
   return (  
     <div >
      <Router>
        <Navbar />
        {/* {console.log(country)} */}
        <LoadingBar  color='#f11946' progress={progress} />
        <Routes>
            <Route  path="/general" element={<News setProgress={setProgress} apikey={apikey} key="general" size={20} category="general"/>}/>
            <Route  path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" size={20} category="business" />}/>
            <Route  path="/entertainment"element={<News setProgress={setProgress} apikey={apikey} key="entertainment" size={20} category="entertainment"/>}/>
            <Route  path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" size={20} category="health" />}/>
            <Route  path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" size={20} category="science" />}/>
            <Route  path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" size={20} category="sports" />}/>
            <Route  path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" size={20} category="technology" />}/>
            <Route  path="*" element={<News setProgress={setProgress} apikey={apikey} key="technology" size={20} category="technology" />}/>
        </Routes>
      </Router>
     </div>
  )
}
export default App
