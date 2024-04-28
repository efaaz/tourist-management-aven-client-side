import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-grow">
          <Outlet></Outlet>
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}

export default Layout;
