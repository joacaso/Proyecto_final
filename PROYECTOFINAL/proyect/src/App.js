// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import GuiaUsuario from './components/GuiaUsuario';
import Register from './components/Register';
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar autenticación al cargar la aplicación
  useEffect(() => {
    fetch('/api/auth/verify', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => setIsAuthenticated(data.success))
      .catch((error) => console.error('Error al verificar autenticación:', error));
  }, []);

  return (
    <Router>
      <div>
        {/* Pasar isAuthenticated y setIsAuthenticated a Header */}
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/" /> : <Login setIsAuthenticated={setIsAuthenticated} />} 
          />
          <Route path="/manual" element={<GuiaUsuario />} />
          <Route 
            path="/registrar" 
            element={isAuthenticated ? <Navigate to="/" /> : <Register />} 
          />
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <div>Dashboard</div> : <Navigate to="/login" />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

