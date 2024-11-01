import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        setIsAuthenticated(true)
        window.location.href = '/';
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Error al iniciar sesión. Inténtalo de nuevo.');
    }
  };

  return (
    <>
      <header className="site-header">
        <a href="/" className="logo-link">
          <img src="./img/remove.png" alt="Logo" className="logo-img" />
        </a>
        <nav className="main-nav">
          <ul>
            <a className="boton" href="/">Menu</a>
            <a className="boton" href="/login">Inicio Sesión</a>
            <a className="boton" href="/manual">Ayuda</a>
          </ul>
        </nav>
      </header>

      <main className="main-content" role="main">
        <section className="login-section">
          <h1 className="login-title">Iniciar Sesión</h1>

          <form onSubmit={handleLogin}>
            <div className="field-group">
              <div className="input-field">
                <i className="fa-solid fa-user"></i>
                <input
                  type="text"
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <div className="input-field">
                <i className="fa-solid fa-lock"></i>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                Mostrar Contraseña
              </label>
            </div>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Iniciar Sesión
              </button>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => navigate('/registrar')}
              >
                Registrarse
              </button>
            </div>
          </form>
        </section>
      </main>


    </>
  );
};

export default Login;