// import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import MainLout from './layout/MainLout.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: '',
    element: <MainLout></MainLout>,
  children:[
    {
      path: '/home',
      element: <Home></Home>,
    },
    {
      path: '/about',
      element: <About></About>,
    },
    {
      path: '/blog',
      element: <Blog></Blog>,
    },
  ]
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
 
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  
  </>,
)
