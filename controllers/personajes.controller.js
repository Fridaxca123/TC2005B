const Personaje = require('../models/personaje');

exports.get_agregar = (req, res) => {
    res.send('<form action="/personajes/agregar" method="POST"><input type="text" name="nombre"><button type="submit">Agregar</button></form>');
};

exports.post_agregar = (req, res) => {
    const nuevoPersonaje = new Personaje(req.body.nombre);
    nuevoPersonaje.save();
    res.redirect('/personajes/mostrar');
};

exports.get_mostrar = (req, res) => {
    res.json(Personaje.fetchAll());
};

exports.get_lista = (req, res) => {
    res.send('Lista de personajes');
};

