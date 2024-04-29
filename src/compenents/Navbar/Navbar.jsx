import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../Providers/AuthProvider";
import DotSpinner from "../Loading/DotSpinner";
import { useContext, useEffect, useState } from "react";

function Navbar() {
 const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");


 function handleToggle(e){
  if (e.target.checked) {
    setTheme("dark");
  }else{
    setTheme("light");
  }
  
 }
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme])
  

  const { user, logOut, loading } = useContext(AuthContext);
  let img;
  if (user && user.photoURL) {
    img = user.photoURL;
  }

  return (
    <div className="container mx-auto work">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `mx-4 text-lg ${
                      isActive
                        ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-spot"
                  className={({ isActive }) =>
                    `mx-2 text-lg ${
                      isActive
                        ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                        : ""
                    }`
                  }
                >
                  All Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-spot"
                  className={({ isActive }) =>
                    `mx-2 text-lg ${
                      isActive
                        ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                        : ""
                    }`
                  }
                >
                  Add Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-list"
                  className={({ isActive }) =>
                    `mx-2 text-lg  ${
                      isActive
                        ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                        : ""
                    }`
                  }
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className=" lg:text-3xl text-base font-bold">
            Aven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `mx-2 text-lg ${
                    isActive
                      ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-spot"
                className={({ isActive }) =>
                  `mx-2 text-lg ${
                    isActive
                      ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                      : ""
                  }`
                }
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-spot"
                className={({ isActive }) =>
                  `mx-2 text-lg ${
                    isActive
                      ? "btn btn-outline rounded-full text-yellow-500 font-semibold"
                      : ""
                  }`
                }
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <NavLink
              to="/my-list"
              className={({ isActive }) =>
                `mx-2 text-lg dark:text-white ${
                  isActive
                    ? "btn btn-outline rounded-full !text-yellow-500 font-semibold"
                    : ""
                }`
              }
            >
              My List
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
        <input type="checkbox" className="toggle lg:mr-2 sm:mr-0" onChange={handleToggle} />
          {loading ? (
            // Display a loading spinner
            <div className="flex items-center justify-center">
              <div className="loader mr-4">
                <DotSpinner></DotSpinner>
              </div>
            </div>
          ) : (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar mr-2"
              >
                {user && (
                  <div className="w-11 rounded-full">
                    <div
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.displayName}
                      data-tooltip-place="left"
                    >
                      <img alt="user img" src={img} />
                      <Tooltip id="my-tooltip" />
                    </div>
                  </div>
                )}
              </div>
              {user ? (
                <button
                  onClick={logOut}
                  className="btn rounded-full btn-info text-white"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link
                    to="/Sign-in"
                    className="btn rounded-full btn-success lg:text-base text-sm mr-2 text-white"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/Sign-up"
                    className="btn rounded-full btn-success mr-1 text-white"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
