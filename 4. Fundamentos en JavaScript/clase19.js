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
console.log(array);

const esAlta = ({ altura }) => altura > 1.80;

var personasAltas = array.filter(esAlta);

const pasarAlturaCms = persona => ({
        ...persona,
        altura: persona.altura * 100
    });

/*const pasarAlturaCms = persona => {
    persona.altura = persona.altura * 100;
    persona.altura *= 100;
    return {
        ...persona,
        altura: persona.altura * 100
    };
}*/

var personasCms = array.map(pasarAlturaCms);
console.log(personasCms);



