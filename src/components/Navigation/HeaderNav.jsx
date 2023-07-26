import { FaHome, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";

const HeaderNav = () => {
  return (
    <nav className="headernav">
      <ul>
        <li className="headernavlist">
          <Link to="/">
            <span>
              <FaHome size={20} className="headericon" />
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <span>
              <FaUser className="headericon" />
            </span>
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
