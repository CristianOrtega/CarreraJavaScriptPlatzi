var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    altura: 1.74,
    cantidadDeLibros: 85
}

var reinante = {
    nombre: 'Jose',
    apellido: 'Reinante',
    altura: 1.85,
    cantidadDeLibros: 72
}

var michael = {
    nombre: 'Michael',
    apellido: 'Thumala',
    altura: 1.67,
    cantidadDeLibros: 301
}

var angelo = {
    nombre: 'Angelo',
    apellido: 'Fecci',
    altura: 1.83,
    cantidadDeLibros: 182
}

var array = [cristian, reinante, michael, angelo];
/*var acum = 0;
for (let i = 0; i < array.length; i++) {
    acum += array[i].cantidadDeLibros;
}*/

const reducer = (acum, { cantidadDeLibros }) => acum + cantidadDeLibros; 

var totalDeLibros = array.reduce(reducer, 0);

console.log(`En total todos tienen ${totalDeLibros} libros.`);
