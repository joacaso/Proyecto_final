// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isAuthenticated, setIsAuthenticated }) => {

  const handleLogout = () => {
    // Aquí podríamos hacer una solicitud al backend para cerrar sesión
    fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
      .then(() => {
        setIsAuthenticated(false); // Cambiamos el estado a no autenticado
      })
      .catch((error) => console.error('Error al cerrar sesión:', error));
  };

  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src="./img/logo-2.png" alt="Logo" className="logo-img" />
      </Link>
      <nav className="main-nav">
        <ul>
          <li>
            <Link className="boton" to="/">Menu</Link>
          </li>
          <li>
            <Link className="boton" to="/manual">Ayuda</Link>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <button className="boton" onClick={handleLogout}>Cerrar Sesión</button>
              </li>
              <li>
                <Link className="boton" to="/Dashboard">Dashboard</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="boton" to="/login">Inicio Sesión</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
