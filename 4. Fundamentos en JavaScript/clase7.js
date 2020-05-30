var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
}

var francisca = {
    nombre: 'Francisca',
    apellido: 'Aguilera',
    edad: 27
}


function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre;
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

// funcion para imprimir nombre y edad -- Hola me llamo parametro y tengo parametro años

function imprimirNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}