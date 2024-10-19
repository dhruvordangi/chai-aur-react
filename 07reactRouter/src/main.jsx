import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import Layout from './layout.jsx';
import Home from './components/Home/home.jsx'
import About from './components/About/About.jsx'
import{ Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Contact from './components/Contact/contact.jsx';
import User from './components/User/User.jsx';
import GitHub,{gitHubInfoLoader} from './components/GitHub/GitHub.jsx';


// const router= createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='' element={<About />} />
      <Route path='' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route 
      loader={gitHubInfoLoader}
      path='github' 
      element={<GitHub />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
