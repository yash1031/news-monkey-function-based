import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { useState } from 'react';
import News from "./component/News";
import LoadingBar from 'react-top-loading-bar'
import reportWebVitals from './reportWebVitals';





// New Main Component to manage state
function Main() {
  const [progress, setProgress] = useState(0); // Define useState here
  let apikey=process.env.REACT_APP_NEWS_API

  const router = createBrowserRouter([
    {
      
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/general",
          element: <News setProgress={setProgress} apikey={apikey} key="general" size={20} category="general"/>,
        },
        {
          path: "/business",
          element: <News setProgress={setProgress} apikey={apikey} key="business" size={20} category="business"/>,
        },
        {
          path: "/entertainment",
          element: <News setProgress={setProgress} apikey={apikey} key="entertainment" size={20} category="entertainment"/>,
        },
        {
          path: "/health",
          element: <News setProgress={setProgress} apikey={apikey} key="health" size={20} category="health"/>,
        },
        {
          path: "/science",
          element: <News setProgress={setProgress} apikey={apikey} key="science" size={20} category="science"/>,
        },
        {
          path: "/sports",
          element: <News setProgress={setProgress} apikey={apikey} key="sports" size={20} category="sports"/>,
        },
        {
          path: "/technology",
          element: <News setProgress={setProgress} apikey={apikey} key="technology" size={20} category="technology"/>,
        },
      ],
      // errorElement: <Error />,
    },
  ]);
  return (
    <React.StrictMode>
      <LoadingBar color='#f11946' progress={progress} />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
