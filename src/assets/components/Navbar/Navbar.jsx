import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // ✅ FIXED: should be from react-router-dom
import { AuthContext } from "../../../context/AuthContext";
import userPic from "../../pic/user.png";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const Links = (
    <>
      <li>
        <NavLink to="/" className="px-3 py-2">
          Home
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink to="/Register" className="px-3 py-2">
            Register
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/Profile" className="px-3 py-2">
            Profile
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 px-4">
      {/* Start: Logo + Mobile Dropdown */}
      <div className="navbar-start">
        {/* Mobile Dropdown Button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          {/* Mobile Menu Items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold ml-2">
          {user ? user.email : "Dragon News"}
        </Link>
      </div>

      {/* Center: Menu links (Desktop Only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* End: Avatar + Login/Logout */}
      <div className="navbar-end gap-3">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={user?.photoURL || userPic} alt="User Avatar" />
          </div>
        </div>
        {user ? (
          <button
            onClick={signOutUser}
            className="btn bg-gray-700 text-white hover:bg-gray-600 px-4 py-2"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/Login"
            className="btn bg-gray-700 text-white hover:bg-gray-600 px-4 py-2"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
