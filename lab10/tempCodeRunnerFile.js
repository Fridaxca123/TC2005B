const http = require('http');

const Terurin = [];

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

const html_card_header = `<div class="card"><p>`;
const html_card_footer = `</p></div>`;

const server = http.createServer((request, response) => {   
    if (request.url == "/" && request.method == "GET") {
        console.log(request.url);
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.write(html_header + html_content_form + html_footer);
        response.end();
    } else if (request.method == "POST") {
        const datos = [];

        request.on('data', (dato) => {
            datos.push(dato);
        });

        request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            Terurin.push(datos_completos.split('=')[1]);
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.write(html_header);
            response.write('<div class="columns">');
            for (const personaje of Terurin) {
                response.write('<div class="column">');
                response.write(html_card_header);
                response.write(personaje);
                response.write(html_card_footer);
                response.write('</div>');
            }
            response.write('</div>');
            response.write(html_footer);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html; charset=utf-8');
        response.write(html_header + "La página no existe" + html_footer);
        response.end();
    }
});

server.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
