const { info } = require('console');
const Personaje = require('../models/personaje.model');

exports.get_agregar = (request, response, next) => {
    console.log(request.session);
    response.render('agregar_personaje', {
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
    });
};

exports.post_agregar = (request, response, next) => {
    console.log(request.body);
    const personaje = new Personaje(request.body.nombre);
    personaje.save()
        .then(() => {
            request.session.info = `Personaje ${personaje.nombre} guardado.`;
            response.redirect('/personajes');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_lista = (request, response, next) => { 
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    Personaje.fetchAll()
        .then(([rows, fielData]) => {
            response.render('lista_personajes', {
                personajes: rows,
                isLoggedIn: request.session.isLoggedIn || false,
                username: request.session.username || '',
                info: mensaje,
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.get_mostrar = (request, response, next) => {
    const path = require('path');
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

//get_agregar(): Muestra un formulario para agregar un personaje.
//post_agregar(): Toma los datos del formulario y los guarda en la lista.
//get_mostrar(): Muestra una vista con los personajes guardados.
//get_lista(): Devuelve los personajes en formato JSON (útil para APIs).