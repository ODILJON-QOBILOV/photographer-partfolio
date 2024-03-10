import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutMe from './Pages/About Me/AboutMe';
import Partfolio from './Pages/Partfolio/Partfolio';
import Services from './Pages/Services/Services';
import Layout from './Pages/Layout/Layout';
import Contact from './Pages/Contact Me/Contact';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutMe /> },
        { path: "portfolio", element: <Partfolio /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
