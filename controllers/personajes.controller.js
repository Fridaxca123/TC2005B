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
    personaje.save();
    response.setHeader('Set-Cookie', 'ultimo_personaje=${personaje.nombre}');
    console.log(Personaje.fetchAll());
    response.redirect('/personajes');
};



exports.get_lista = (request, response, next) => { 
    console.log(request.get('Cookie'));
    response.render('lista_personajes', {
        personajes: Personaje.fetchAll(),
        isLoggedIn: request.session.isLoggedIn || false,
        username: request.session.username || '',
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