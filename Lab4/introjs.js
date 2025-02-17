//Tabla 
function generarTabla(numero) {
    let tabla = "<table border='1' style='border-collapse: collapse; text-align: center;'>";
    tabla += "<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= numero; i++) {
        tabla += `<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`;
    }

    tabla += "</table>";
    return tabla;
}

function probarGenerarTabla() {
    console.assert(generarTabla(2).includes("<td>1</td><td>1</td><td>1</td>"), "Error en la fila del 1");
    console.assert(generarTabla(2).includes("<td>2</td><td>4</td><td>8</td>"), "Error en la fila del 2");
    console.assert(generarTabla(3).includes("<td>3</td><td>9</td><td>27</td>"), "Error en la fila del 3");
    console.log("Pruebas completadas");
}

function mostrarTabla() {
    let numero = parseInt(prompt("Ingrese un número entero:"));
    if (!isNaN(numero) && numero > 0) {
        document.getElementById("tabla-container").innerHTML = generarTabla(numero);
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

probarGenerarTabla();  
mostrarTabla();  

//Numero aleatorio
document.getElementById("start-sum").addEventListener("click", function () {
    let num1 = Math.floor(Math.random() * 10) + 1; 
    
    let startTime = Date.now();
    let respuesta = prompt(`¿Cuánto es ${num1} + ${num2}?`);
    let endTime = Date.now(); 
    
    let tiempo = (endTime - startTime) / 1000; 
    let resultado = document.getElementById("result");

    if (parseInt(respuesta) === num1 + num2) {
        resultado.textContent = `✅ Correcto. Tiempo: ${tiempo.toFixed(2)} segundos.`;
        resultado.style.color = "green";
    } else {
        resultado.textContent = `❌ Incorrecto. La respuesta era ${num1 + num2}. Tiempo: ${tiempo.toFixed(2)} segundos.`;
        resultado.style.color = "red";
    }
});

//Contador
function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;

    for (let num of arr) {
        if (num < 0) {
            negativos++;
        } else if (num == 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    return { negativos, ceros, positivos };
}

function procesarNumeros() {
    let inputTexto = document.getElementById("numerosInput").value;
    let numerosArray = inputTexto.split(",").map(num => parseFloat(num.trim()));

    if (numerosArray.some(isNaN)) {
        document.getElementById("resultado").innerText = "Por favor, ingresa solo números separados por comas.";
        return;
    }

    let resultado = contador(numerosArray);

    document.getElementById("resultado").innerText = 
        `Negativos: ${resultado.negativos}, Ceros: ${resultado.ceros}, Positivos: ${resultado.positivos}`;
}

function promedios(matriz) {
    return matriz.map(fila => {
        let suma = fila.reduce((acc, num) => acc + num, 0);
        return suma / fila.length;
    });
}


function inverso(numero) {
    return parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);
}

function calcularPromedios() {
    let inputTexto = document.getElementById("matrizInput").value;
    let filas = inputTexto.split(";").map(fila => fila.split(",").map(num => parseFloat(num.trim())));

    if (filas.some(fila => fila.some(isNaN))) {
        document.getElementById("resultadoPromedios").innerText = "Error: Ingresa solo números en el formato correcto.";
        return;
    }

    let resultado = promedios(filas);
    document.getElementById("resultadoPromedios").innerText = `Promedios: ${resultado.join(", ")}`;
}

function calcularInverso() {
    let numero = parseInt(document.getElementById("numeroInput").value);

    if (isNaN(numero)) {
        document.getElementById("resultadoInverso").innerText = "Error: Ingresa un número válido.";
        return;
    }

    let resultado = inverso(numero);
    document.getElementById("resultadoInverso").innerText = `Número invertido: ${resultado}`;
}
