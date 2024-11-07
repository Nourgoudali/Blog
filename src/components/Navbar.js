import React from 'react';
import '../App.scss';


const Navbar = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="logo">DEV 201 APP</div>
      {isAuthenticated ? (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <span>Login</span>
      )}
    </div>
  );
};

export default Navbar;
