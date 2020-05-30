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


function imprimirNombreEnMayusculas({ nombre }) {
    var nombre = nombre.toUpperCase();
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(cristian);
imprimirNombreEnMayusculas(francisca);
//imprimirNombreEnMayusculas({ nombre: 'pepito' });
imprimirNombreEnMayusculas({ apellido: 'Gomez' }); // Lanzara error porque el objeto no tiene el atributo nombre