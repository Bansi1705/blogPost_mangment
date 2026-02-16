import React from "react";
import { FaBlog, FaHome, FaPlusSquare, FaSignOutAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdAnalytics } from "react-icons/md";
import { toast } from "react-toastify";

function Navbar() {
  const data = JSON.parse(localStorage.getItem("blog_rdata"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("blog_rdata");
    localStorage.removeItem("blog_ldata");
    toast.error("Logout...");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <FaBlog className="logo.icon" />
          <span className="logo-text">BlogPost</span>
        </div>
        <div className="navbar-links">
          <NavLink to="/dashboard" className="nav-item">
            <FaHome className="nav-icon" /> Home
          </NavLink>

          <NavLink to="/create-post" className="nav-item">
            <FaPlusSquare className="nav-icon" /> Create Post
          </NavLink>

           <NavLink to="/charts" className="nav-item">
            <MdAnalytics className="nav-icon" /> Analitcs
          </NavLink>
        </div>
        <div className="navbar-actions">
          <span className="user-name">Hi,{data.name}</span>

          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
