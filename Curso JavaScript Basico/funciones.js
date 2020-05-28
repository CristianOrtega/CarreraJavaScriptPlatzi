//Declarativas

function miFuncion() {
    return 3;
}

//Expresiva
var a = 1;
var b = 3;
var miFuncion = function(a, b) {
    return a + b;
}

miFuncion(a, b);

// ejemplos
function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

function sumar(a, b) {
    var resultado = a + b;
    return resultado;
}