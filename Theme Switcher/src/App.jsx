import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import About from "./components/About";
import Products from "./components/Products";

function App() {
  // Retrieve the current theme from local storage, defaulting to "light" if not set
  const currentTheme = localStorage.getItem("currentTheme");
  // State to manage the current theme, initialized with the theme from local storage or "light"
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");

  // Update local storage whenever the theme state changes
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);

  return (
    <Router>
      <div className={`container ${theme}`}>
        {/* Render the Navbar component and pass theme and setTheme as props */}
        <Navbar theme={theme} setTheme={setTheme} />
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* Render the Footer component */}
      </div>
    </Router>
  );
}

export default App;
