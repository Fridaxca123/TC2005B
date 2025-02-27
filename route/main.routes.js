const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.send("Bienvenido a la página principal");
});

// Nueva ruta: About
router.get('/about', (req, res) => {
    res.send("Esta es la página About");
});

// Nueva ruta: Contact
router.get('/contact', (req, res) => {
    res.send("Esta es la página de Contacto");
});

module.exports = router;
