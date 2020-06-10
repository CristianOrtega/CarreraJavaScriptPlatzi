var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    altura: 1.74
}

var reinante = {
    nombre: 'Jose',
    apellido: 'Reinante',
    altura: 1.85
}

var michael = {
    nombre: 'Michael',
    apellido: 'Thumala',
    altura: 1.67
}

var angelo = {
    nombre: 'Angelo',
    apellido: 'Fecci',
    altura: 1.83
}

var array = [cristian, reinante, michael, angelo];

const esAlta = ({ altura }) => altura > 1.80;

var personasAltas = array.filter(esAlta);
var personasBajas = array.filter(!esAlta);

/*var personasAltas = array.filter(function (persona){
    return persona.altura > 1.80;
});*/


