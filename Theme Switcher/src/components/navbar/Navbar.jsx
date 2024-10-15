import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo_light from "../../assets/logo-black.png";
import logo_dark from "../../assets/logo-white.png";
import search_icon_light from "../../assets/search-w.png";
import search_icon_dark from "../../assets/search-b.png";
import toogle_dark from "../../assets/day.png";
import toogle_light from "../../assets/night.png";

function Navbar({ theme, setTheme }) {
  // Function to toggle between light and dark themes
  const checkMode = () => {
    // If the current theme is light, set it to dark; otherwise, set it to light
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      {/* Render the logo based on the current theme */}
      <img
        src={theme === "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />
      {/* Navigation links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {/* Search box */}
      <div className="search-box">
        <input type="text" placeholder="Search" />
        {/* Render search icon based on the current theme */}
        <img
          src={theme === "light" ? search_icon_light : search_icon_dark}
          alt=""
        />
      </div>
      {/* Theme toggle button */}
      <img
        onClick={checkMode}
        // Render toggle icon based on the current theme
        src={theme === "light" ? toogle_light : toogle_dark}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
}

export default Navbar;
