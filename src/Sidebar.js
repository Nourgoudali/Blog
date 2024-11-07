import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar, toggleDarkMode, darkMode }) => {
  return (
    <nav className={`sidebar ${isOpen ? 'open' : 'closed'}`} aria-expanded={isOpen}>
      <button className="close-button" onClick={toggleSidebar} aria-label="Close Sidebar">
        &times;
      </button>
      <h1 className="site-title">NRGS</h1>
      <ul>
        <li>
          <Link to="/" onClick={toggleSidebar}>
            <i className="fa fa-home"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleSidebar}>
            <i className="fa fa-user"></i> About
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={toggleSidebar}>
            <i className="fa fa-pencil"></i> Blog
          </Link>
        </li>
      </ul>
      <button onClick={toggleDarkMode} className="toggle-button" aria-label="Toggle Dark Mode">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Sidebar;
