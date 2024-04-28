import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compenents/Layout/Layout.jsx";
import Error from "./compenents/ErrorPage/Error.jsx";
import Home from "./compenents/Home/Home.jsx";
import Login from "./compenents/Login/Login.jsx";
import Register from "./compenents/Register/Register.jsx";
import AuthProvider, { AuthContext } from "./Providers/AuthProvider.jsx";
import AllSpot from "./compenents/AllSpot/AllSpot.jsx";
import AddSpot from "./compenents/AddSpot/AddSpot.jsx";
import MyList from "./compenents/MyList/MyList.jsx";
import ViewDetails from "./compenents/ViewDetails/ViewDetails.jsx";
import UpdateSpot from "./compenents/UpdateSpot/UpdateSpot.jsx";
import CountryWiseSpots from "./compenents/CountryWiseSpot/CountryWiseSpots.jsx";
import PrivateRoute from "./compenents/PrivateRoute/PrivateRoute.jsx";
import App from "./App.jsx";

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
      {
        path: "/Sign-in",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <Register></Register>,
      },
      {
        path: "/all-spot",
        element: <AllSpot></AllSpot>,
        loader: () => fetch("http://localhost:5000/all/spots")
      },
      {
        path: "/add-spot",
        element: <PrivateRoute><AddSpot></AddSpot></PrivateRoute> ,
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute> ,
      },
      {
        path: "/viewDetails/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: "/spots/update/:id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: "/country/:country",
        element: <CountryWiseSpots></CountryWiseSpots>,
        loader: ({params}) => fetch(`http://localhost:5000/${params.country}`)
      },
      {
        path: "/App",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>
);
