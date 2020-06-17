const MAYOR_DE_EDAD = 18;

var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
}

function esMayorDeEdad1(persona) {
    if (persona.edad >= MAYOR_DE_EDAD) {
        var mensaje = 'Es mayor de edad';
    } else {
        var mensaje = 'Es menor de edad';
        var mensaje2 = 'prueba hoisting';
    }
    console.log(mensaje);
    console.log(mensaje2);
}

function esMayorDeEdad2(persona) {
    let mensaje;
    if (persona.edad >= MAYOR_DE_EDAD) {
        mensaje = 'Es mayor de edad';
    } else {
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

esMayorDeEdad(cristian);

const numeros = [1, 2, 3, 4, 5, 6, 7];

numeros = [1, 2]; // Arroja error ya que se le esta asignando un nuevo valor

numeros.push(8); // Si podemos modificar el array pero reasigna la variable a otro valor.