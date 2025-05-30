import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/'); // Redirect to login or home after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">CryptoPay</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/settlements">Settlements</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
      <button className="navbar-logout" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

