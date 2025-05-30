import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Settlements from '../pages/Settlements';
import Navbar from './Navbar';
import Checkout from '../pages/Checkout'; // Import your new checkout page

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token')
  );

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/settlements"
          element={
            isAuthenticated ? <Settlements /> : <Navigate to="/" />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout />} // Public checkout page
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
