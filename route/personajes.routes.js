const express = require('express');

const router = express.Router();

const html_header = ``;

const html_footer = `</body></html>`;

const html_content_form = ``;

// Arreglo para almacenar personajes
const Ternurin = [];

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/agregar', (request, response, next) => {
    response.render('agregar_personaje')
    //response.send(html_header + html_content_form + html_footer);
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/agregar', (request, response, next) => {
    console.log(request.body);
    Ternurin.push(request.body.nombre); // Asegúrate de que Terurin está definido antes.

    console.log(Ternurin);

    let html = html_header;
    for (let personaje of Ternurin) { // Usamos Terurin que es donde estamos agregando nombres.
        html += html_card_header;
        html += personaje; // Insertamos el nombre del personaje.
        html += html_card_footer;
    }
    html += html_footer;

    response.send(html);
    respond.render('lista_personajes');
});

const path = require('path');

router.get('/mostrar', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;

