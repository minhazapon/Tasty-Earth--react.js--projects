import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import OurMenu from './Our menu/OurMenu';
import ContactBanner from './Contact/ContactBanner';
import ContactMother from './Contact/ContactMother';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign",
        element: <SignUp></SignUp>,
      },
      {
        path: "/ourmenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/contactmother",
        element: <ContactMother></ContactMother>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
