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

function imprimirNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    };
}

var cristianViejo = cumpleanos(persona);