import React from "react";
import { FaBars, FaBell, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLeft = ({ handleShowSidebar, showSidebar }) => {
  const username = useSelector((state) => state.useriddata.name);
  const avatar = useSelector((state) => state.useriddata.avatar);
  const navigate = useNavigate();

  function handleheaderhome() {
    navigate("/");
  }

  return (
    <div className="headeruser">
      <img className="headeravatar" src={avatar} alt={username} />
      <span className="headerusername">{username}</span>
      <div className="headerhomebutton" onClick={handleheaderhome}>
        <FaHome size={20} className="headericon" />
      </div>
      <div className="sidebar-toggle-button" onClick={handleShowSidebar}>
        <FaBars size={20} className="sidebartoggleicon" />
      </div>
    </div>
  );
};

export default HeaderLeft;
