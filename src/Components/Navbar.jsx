import React from "react";
import {
  FaBlog,
  FaHome,
  FaMoon,
  FaPlusSquare,
  FaSignOutAlt,
  FaStar,
  FaSun,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdAnalytics } from "react-icons/md";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const data = JSON.parse(localStorage.getItem("blog_rdata"));
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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

          <NavLink to="/favorites" className="nav-item">
            <FaStar className="nav-icon" />
            Favorites
          </NavLink>
        </div>
        <div className="navbar-actions">
          {data ? (
            <>
              <span className="user-name">Hi,{data.name}</span>
              <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
              <button onClick={handleLogout} className="logout-btn">
                <FaSignOutAlt />
                Logout
              </button>
            </>
          ) : (
            <button
            type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
