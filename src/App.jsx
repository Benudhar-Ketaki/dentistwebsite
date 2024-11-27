import React from 'react';
import Home from './Components/Home.jsx'
import Foter from './Components/Foter.jsx'
import Navbar from './Components/Navbar.jsx';
import Contact from './Components/Contact.jsx';
import Service from './Components/Service.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<>
    <Navbar/>
    <Home/>
    <Foter/>
    </>
  },
  {
    path:'/Service',
    element:
    <>
    <Navbar/>
    <Service/>
    <Foter/>
    </>

  },
  {
    path:'/Contact',
    element:<>
    <Navbar/>
    <Contact/>
    <Foter/>
    </>
  }
]);

  return (
    <>
  <RouterProvider router={router} />
    </>
  )
}

export default App
