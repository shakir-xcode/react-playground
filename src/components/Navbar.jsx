import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

const Navbar = () => {
  const user = useContext(LoginContext);

  const handleLogOut = () => {
    alert("logging out...");
    user.setIsLoggedIn(false);
  };

  return (
    <div className="relative flex items-end">
      <div className=" absolute left-0 right-0 -bottom-1 h-[1px] bg-slate-400"></div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/userData">UserData</Link>
          </li>
          <li>
            <Link to="/hooks">Hooks</Link>
          </li>
          <li>
            <Link to="/boxes">Boxes</Link>
          </li>
          <li>
            <Link to="/tetris">Tetris</Link>
          </li>
          <li>
            <Link to="/upload">FileUpload</Link>
          </li>
          <li>
            <Link to="/lobby">Video Call</Link>
          </li>
        </ul>
      </div>
      <div className=" ml-auto">
        <ul>
          <li>
            {!user.isLoggedIn ? (
              <div className="flex gap-2">
                <Link
                  to="/login"
                  className="px-4 py-1 bg-purple-600 rounded text-slate-200 text-sm"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-1 bg-purple-600 rounded text-slate-200 text-sm"
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to="/"
                onClick={handleLogOut}
                className="px-4 py-1 bg-purple-600 rounded text-slate-200 text-sm"
              >
                Log Out
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
