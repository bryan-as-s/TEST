// Obtener el elemento <p> por su ID
var parrafo = document.getElementById("parrafo");

// Obtener el elemento <span> por su ID
var contador = document.getElementById("contador");

// Obtener el texto del párrafo
var texto = parrafo.textContent;

// Dividir el texto en palabras usando un espacio en blanco como separador
//var palabras = texto.split(" ");

// Obtener el número de palabras
var numeroPalabras = texto.trim().split(/\s+/).filter(Boolean).length;

// Mostrar el número de palabras en el elemento <span>
contador.textContent = numeroPalabras;

// Obtener los elementos de entrada y resultados
//var totalPalabrasInput = document.getElementById("totalPalabras");
var horasInput = document.getElementById("horas");
var minutosInput = document.getElementById("minutos");
var segundosInput = document.getElementById("segundos");
var respuestasCorrectasInput = document.getElementById("respuestasCorrectas");
var resultadoPalabrasPorMinuto = document.getElementById("resultado");
var porcentajeComprension = document.getElementById("porcentajeComprension");
var calcularBtn = document.getElementById("calcularBtn");

// Función para validar que los valores estén dentro de los rangos correctos y aplicar estilos
function validarValores() {
    var valid = true;

    var horas = parseInt(horasInput.value);
    var minutos = parseInt(minutosInput.value);
    var segundos = parseInt(segundosInput.value);
    var respuestasCorrectas = parseInt(respuestasCorrectasInput.value);

    // Validar que las horas estén entre 0 y 24
    if (horas < 0 || horas > 24) {
        horasInput.style.color = "red";
        valid = false;
    } else {
        horasInput.style.color = "";
    }

    // Validar que los minutos estén entre 0 y 59
    if (minutos < 0 || minutos >= 60) {
        minutosInput.style.color = "red";
        valid = false;
    } else {
        minutosInput.style.color = "";
    }

    // Validar que los segundos estén entre 0 y 59
    if (segundos < 0 || segundos >= 60) {
        segundosInput.style.color = "red";
        valid = false;
    } else {
        segundosInput.style.color = "";
    }

    // Validar que las respuestas correctas estén entre 0 y 5
    if (respuestasCorrectas < 0 || respuestasCorrectas > 5) {
        respuestasCorrectasInput.style.color = "red";
        valid = false;
    } else {
        respuestasCorrectasInput.style.color = "";
    }

    return valid;
}

// Restaurar el color normal cuando se modifiquen los campos
horasInput.addEventListener("input", function () {
    validarValores();
});

minutosInput.addEventListener("input", function () {
    validarValores();
});

segundosInput.addEventListener("input", function () {
    validarValores();
});

respuestasCorrectasInput.addEventListener("input", function () {
    validarValores();
});

// Restaurar el color normal al hacer clic en el campo
horasInput.addEventListener("click", function () {
    horasInput.style.color = "";
});

minutosInput.addEventListener("click", function () {
    minutosInput.style.color = "";
});

segundosInput.addEventListener("click", function () {
    segundosInput.style.color = "";
});

respuestasCorrectasInput.addEventListener("click", function () {
    respuestasCorrectasInput.style.color = "";
});

// Función para calcular la división y el porcentaje de comprensión
function calcularDivisionYComprension() {
    // Obtener los valores ingresados y validar que sean números
    //var totalPalabrasValue = totalPalabrasInput.value.trim();
    var horasValue = horasInput.value.trim();
    var minutosValue = minutosInput.value.trim();
    var segundosValue = segundosInput.value.trim();
    var respuestasCorrectasValue = respuestasCorrectasInput.value.trim();

    // Validar que los valores cumplan con las restricciones y que los valores de tiempo estén dentro de los rangos adecuados
    //if (!/^\d+$/.test(totalPalabrasValue) || !/^\d+$/.test(horasValue) || !/^\d+$/.test(minutosValue) || !/^\d+$/.test(segundosValue) || !/^\d+$/.test(respuestasCorrectasValue) ||
    //    !validarValores()) {
    //    resultadoPalabrasPorMinuto.textContent = "Ingrese valores válidos.";
    //    porcentajeComprension.textContent = "";
    //    return;
    //}

    // Convertir los valores a números enteros
    //var totalPalabras = parseInt(totalPalabrasValue);
    var horas = parseInt(horasValue);
    var minutos = parseInt(minutosValue);
    var segundos = parseInt(segundosValue);
    var respuestasCorrectas = parseInt(respuestasCorrectasValue);

    // Convertir horas, minutos y segundos a segundos
    var totalSegundos = (horas * 3600) + (minutos * 60) + segundos;

    // Verificar si los valores ingresados son válidos
    if (!isNaN(numeroPalabras) && !isNaN(totalSegundos) && totalSegundos !== 0) {
        var palabrasPorMinuto = Math.round((numeroPalabras / totalSegundos) * 60);
        resultadoPalabrasPorMinuto.textContent = palabrasPorMinuto + " palabras por minuto";

        // Calcular el porcentaje de comprensión
        var porcentaje = (respuestasCorrectas / 5) * 100;
        porcentajeComprension.textContent = porcentaje.toFixed(2) + "%";
    } else {
        resultadoPalabrasPorMinuto.textContent = "Ingrese valores válidos.";
        porcentajeComprension.textContent = "";
    }
}

// Agregar evento al botón de calcular
calcularBtn.addEventListener("click", calcularDivisionYComprension);

// Cal
