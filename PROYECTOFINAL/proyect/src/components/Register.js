import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Las contraseñas no coinciden.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/register', {
                username,
                email,
                password,
            });

            if (response.data.success) {
                setSuccessMessage('Registro exitoso. Puedes iniciar sesión.');
                setErrorMessage('');
            } else {
                setErrorMessage(response.data.message);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage('Error al registrarse. Inténtalo de nuevo.');
            setSuccessMessage('');
        }
    };

    return (
        <>
            <header className="site-header">
                <a href="/" className="logo-link">
                    <img src="./img/logo-2.png" alt="Logo" className="logo-img" />
                </a>
                <nav className="main-nav">
                    <ul>
                        <li>
                            <a className="boton" href="/">Menu</a>
                        </li>
                        <li>
                            <a className="boton" href="/login">Inicio Sesión</a>
                        </li>
                        <li>
                            <a className="boton" href="/manual">Ayuda</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="main-content" role="main">
                <section className="login-section">
                    <h1 className="login-title">Registro</h1>
                    <form onSubmit={handleRegister}>
                        <div className="field-group">
                            <div className="input-field">
                                <i className="fa-solid fa-user"></i>
                                <input
                                    type="text"
                                    placeholder="Nombre de Usuario"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <div className="input-field">
                                <i className="fa-solid fa-envelope"></i>
                                <input
                                    type="email"
                                    placeholder="Correo Electrónico"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <div className="input-field">
                                <i className="fa-solid fa-lock"></i>
                                <input
                                    type="password"
                                    placeholder="Confirmar Contraseña"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && (
                            <p className="success-message">
                                {successMessage}
                            </p>
                        )}

                        <div className="form-actions">
                            <button type="submit" className="btn-primary">
                                Registrarse
                            </button>
                            {successMessage && (
                                <button
                                    type="button"
                                    onClick={() => navigate('/')}
                                    className="btn-secondary"
                                >
                                    Volver a Iniciar Sesión
                                </button>
                            )}
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Register;
