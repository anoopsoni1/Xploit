import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom" ;
import Home from './Components/Home.jsx';
import Team from './Components/Team.jsx';

const route = createBrowserRouter([
  {
    path : "/" ,
    element : <Home />,
  } ,
  
   
 {
    path : "/Team" ,
    element : <Team />
  }
  
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={route} />
  </StrictMode>,
)
