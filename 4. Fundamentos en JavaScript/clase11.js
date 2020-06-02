var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
};

const MAYORIA_EDAD = 18;

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    var msg = `${persona.nombre} es `;
    if (esMayorDeEdad(persona)) {
        msg += 'mayor de edad.';
    } else {
        msg += 'menor de edad.';
    }
    return msg;
}