var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    gamer: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre}:`);
    if (persona.ingeniero) { // equivale a persona.ingeniero === true
        console.log('Es Ingeniero');
    } else {
        console.log('No es Ingeniero');
    }

    if (persona.cocinero) {
        console.log('Es Cocinero');
    } else {
        console.log('No es Cocinero');
    }

    if (persona.cantante) {
        console.log('Es Cantante');
    } else {
        console.log('No es Ingeniero');
    }

    if (persona.dj) {
        console.log('Es DJ');
    } else {
        console.log('No es Ingeniero');
    }

    if (persona.guitarrista) {
        console.log('Es Guitarrista');
    } else {
        console.log('No es Ingeniero');
    }

    if (persona.gamer) {
        console.log('Es Gamer');
    } else {
        console.log('No es Ingeniero');
    }
}

var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
};

function imprimirSiEsMayorDeEdad(persona) {
    var msg = `${persona.nombre} es `;
    if (persona.edad >= 18) {
        msg += 'mayor de edad.';
    } else {
        msg += 'menor de edad.';
    }
    console.log(msg);
}