import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './compenents/Layout/Layout.jsx';
import Error from './compenents/ErrorPage/Error.jsx';
import Home from './compenents/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
