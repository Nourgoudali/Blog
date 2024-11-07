import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About"; // Ensure About is imported
import CreateBlog from "./CreateBlog"; // Ensure CreateBlog is imported
import "./App.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span className={`arrow ${isSidebarOpen ? 'hidden' : ''}`}>&#9664;</span>
      </button>

      <nav className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} aria-expanded={isSidebarOpen}>
        <button className="close-button" onClick={toggleSidebar} aria-label="Close Sidebar">
          &times;
        </button>
        <h1 className="site-title">NRGD</h1>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={toggleSidebar}>
              <i className="fa fa-pencil"></i> Blog
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleSidebar}>
              <i className="fa fa-info-circle"></i> About
            </Link>
          </li>
          <li>
            <Link to="/create-blog" onClick={toggleSidebar}>
              <i className="fa fa-plus"></i> Create Blog
            </Link>
          </li>
        </ul>
        <button onClick={toggleDarkMode} className="toggle-button" aria-label="Toggle Dark Mode">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/create-blog" element={<CreateBlog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
