var nombre = 'Cristian', apellido = 'Ortega';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidosEnMinusculas = apellido.toLowerCase();

// Para obtener la primera letra de tu nombre
var primeraLetraDelNombre = nombre.charAt(0);

// Para obtener la cantida de letras que posee un string
var cantidadDeLetrasDelNombre = nombre.length;

// Concatenar dos strings
var nombreCompleto = nombre + ' ' + apellido;

// Otra forma de concatenar strings, esta forma se llamá interpolación de texto

var nombreCompleto2 = `${nombre} ${apellido}`;


// Para obtener 2 letras del nombre se puede utilizar la funcion substr
var str = nombre.substr(1,2);

// Desafio: Encuentra la última letra de su nombre;
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1);