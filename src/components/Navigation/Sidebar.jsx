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
  FaLinkedin,
  FaUser,
  FaYoutube,
  FaToggleOn,
  FaToggleOff,
  FaBars,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { BiLogoGmail, BiPhoneCall } from "react-icons/bi";
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
            <a
              href="https://instagram.com/vivek_bansal_bansal?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
              className="sidebarlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vivek-bansal-622a8a1b9"
              className="sidebarlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span>Linkedin</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:vivekbansal338@gmail.com"
              className="sidebarlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGmail />
              <span>Gmail</span>
            </a>
          </li>
          <li>
            <a
              href="https://auth.geeksforgeeks.org/user/vivekb379/practice"
              className="sidebarlink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGeeksforgeeks />
              <span>GfG</span>
            </a>
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
