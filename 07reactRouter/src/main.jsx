import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import Layout from './layout.jsx';
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import{ RouterProvider, createBrowserRouter} from 'react-router-dom'

const router= createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
