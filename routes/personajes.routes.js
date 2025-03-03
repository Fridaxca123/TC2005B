const express = require('express');
const router = express.Router();
const personajes_controller = require('../controllers/personajes.controller');

router.get('/agregar', personajes_controller.get_agregar);
router.post('/agregar', personajes_controller.post_agregar);
router.get('/mostrar', personajes_controller.get_mostrar);
router.get('/', personajes_controller.get_lista);

module.exports = router;


