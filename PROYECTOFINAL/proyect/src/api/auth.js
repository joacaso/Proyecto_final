// auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
const COOKIE_NAME = 'token'; // Nombre de la cookie de sesión
const SECRET = 'tu_secreto'; // Cambia esto por un secreto seguro para firmar los tokens

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: 'El usuario ya está registrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ success: true, message: 'Registro exitoso.' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al registrarse.' });
  }
});

// Inicio de sesión del usuario
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && bcrypt.compareSync(password, user.password)) {
      // Crear un token JWT y guardarlo en una cookie
      const token = jwt.sign({ userId: user._id }, SECRET, { expiresIn: '1h' });
      res.cookie(COOKIE_NAME, token, {
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', // Solo en producción
        sameSite: 'strict', 
        maxAge: 3600000 // 1 hora
      });
      return res.json({ success: true, message: 'Inicio de sesión exitoso' });
    } else {
      return res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error al iniciar sesión' });
  }
});

// Cierre de sesión
router.post('/logout', (req, res) => {
  res.clearCookie(COOKIE_NAME);
  res.json({ success: true, message: 'Cierre de sesión exitoso' });
});

// Verificación de autenticación
router.get('/verify', (req, res) => {
  const token = req.cookies[COOKIE_NAME];
  if (!token) return res.json({ success: false });

  jwt.verify(token, SECRET, (err) => {
    if (err) return res.json({ success: false });
    res.json({ success: true });
  });
});

module.exports = router;
