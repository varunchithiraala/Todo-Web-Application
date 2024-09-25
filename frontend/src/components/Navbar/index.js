import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Todo</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/profile-card">Profile</Link></li>
      </ul>
      <div className="navbar-auth">
        {token ? (
          <button className="navbar-logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <button className="navbar-login-button" onClick={handleLoginRedirect}>Log In</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
