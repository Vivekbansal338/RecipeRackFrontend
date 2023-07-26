import {
  FaBook,
  FaChartLine,
  FaClipboardList,
  FaCog,
  FaFacebook,
  FaFire,
  FaHeart,
  FaHome,
  FaInstagram,
  FaQuestionCircle,
  FaShoppingCart,
  FaThumbsUp,
  FaTwitter,
  FaUser,
  FaYoutube,
  FaToggleOn,
  FaToggleOff,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/stable-diffusion-xl (12).jpeg";
import { useSelector } from "react-redux";
import { useState } from "react";

const user = {
  name: "Vivek",
  avatar: "https://i.ibb.co/tD3hDHs/man.png",
  // bio: "I am a full stack developer",
};

export default function Sidebar({ showSidebar, handleShowSidebar }) {
  const totalfav = useSelector((state) => state.bookmarkdata.results.length);
  return (
    <aside className={`sidebar ${showSidebar ? "sidebaropen" : ""}`}>
      <div className="sidebar-top">
        <img className="avatar" src={logo} alt="Panoptic" />
        <h3>Recipe Rack</h3>
      </div>
      <nav className="sidebar-nav" onClick={handleShowSidebar}>
        <ul>
          <li>
            <NavLink to="/" className="sidebarlink">
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourites" className="sidebarlink">
              <FaHeart />
              <span>Favourites</span>
              <span className="favcount">({totalfav})</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/my-recipes" className="sidebarlink">
              <FaBook />
              <span>My Recipes</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/mypurchases" className="sidebarlink">
              <FaShoppingCart />
              <span>My Purchases</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/trendings" className="sidebarlink">
              <FaFire />
              <span>Trendings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recommendations" className="sidebarlink">
              <FaThumbsUp />
              <span>Recommendations</span>
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/myprofile" className="sidebarlink">
              <FaUser />
              <span>My profile</span>
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/orderhistory" className="sidebarlink">
              <FaClipboardList />
              <span>Order History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/analytics" className="sidebarlink">
              <FaChartLine />
              <span>Analytics</span>
            </NavLink>
          </li>
        </ul>

        <h4>Social Media</h4>
        <ul>
          <li>
            <NavLink to="/youtube" className="sidebarlink">
              <FaYoutube />
              <span>Youtube</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/instagram" className="sidebarlink">
              <FaInstagram />
              <span>Instagram</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/facebook" className="sidebarlink">
              <FaFacebook />
              <span>Facebook</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/twitter" className="sidebarlink">
              <FaTwitter />
              <span>Twitter</span>
            </NavLink>
          </li>
        </ul>

        {/* Recent, Trends, Suggestions, Links */}
        <h4>Support & setting</h4>
        <ul>
          <li>
            <NavLink to="/settings" className="sidebarlink">
              <FaCog />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className="sidebarlink">
              <FaQuestionCircle />
              <span>Support</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
