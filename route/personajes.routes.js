const express = require('express');
const router = express.Router();
const html_header = `<!DOCTYPE html>
<html>
<head>
    <title>Laboratorio 9: Frida</title>
    <meta charset="UTF-8">
    <style>
        body {
            background-color: #f1e2f5;
            text-align: left;
            font-family: monospace;
            padding: 20px;
            line-height: 1.6;
        }
        h1, h2 {
            margin-bottom: 20px;
        }
        p {
            margin-bottom: 15px;
        }
        aside {
            float: right;
            margin-left: 20px;
        }
        img {
            border-radius: 50%;
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
    </style>
</head>
<body>`;

const html_footer = `</body></html>`;

const html_content_form = `
    <h1>Bienvenido a ternushop!</h1>
    <form method="POST">
        <input type="text" name="personaje">
        <button type="submit">Enviar</button>
    </form>`;

// Arreglo para almacenar personajes
const Terurin = [];

//Cuando se registra un middleware con app.get(), 
//el middleware sólo se registra para el método HTTP GET
router.get('/personajes/agregar', (request, response, next) => {
    response.send(html_header + html_content_form + html_footer);
});

//Cuando se registra un middleware con app.post(), 
//el middleware sólo se registra para el método HTTP POST
router.post('/personajes/agregar', (request, response, next) => {
    console.log(request.body);
    Ternurin.push(request.body.nombre); // Asegúrate de que Terurin está definido antes.

    console.log(Ternurin);

    let html = html_header;
    for (let personaje of Terurin) { // Usamos Terurin que es donde estamos agregando nombres.
        html += html_card_header;
        html += personaje; // Insertamos el nombre del personaje.
        html += html_card_footer;
    }
    html += html_footer;

    response.send(html);
});
module.exports = router;

