const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

// Middleware global
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

// Middleware específico para la ruta /chewy
app.use('/chewy', (request, response, next) => {
    response.send("Hola desde la ruta /chewy");
});

// Importar rutas
const rutasPersonajes = require('./route/personajes.routes');
const rutasMain = require('./route/main.routes');

app.use('/personajes', rutasPersonajes);
app.use('/', rutasMain);

// Manejo de error 404 para rutas no encontradas
app.use((request, response, next) => {
    response.status(404).send("Error 404: Página no encontrada");
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
