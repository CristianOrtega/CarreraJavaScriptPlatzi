var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
};

const MAYORIA_EDAD = 18;

//const esMayorDeEdad = function (persona) {
//    return persona.edad >= MAYORIA_EDAD;
//}

//const esMayorDeEdad = persona => {
//    return persona.edad >= MAYORIA_EDAD;
//}

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_EDAD;


function imprimirSiEsMayorDeEdad(persona) {
    var msg = `${persona.nombre} es `;
    if (esMayorDeEdad(persona)) {
        msg += 'mayor de edad.';
    } else {
        msg += 'menor de edad.';
    }
    return msg;
}

//function permitirAcceso(persona) {
//    if (!esMayorDeEdad(persona)){
//        console.log('acceso denegado')
//    }
//}

const esMenorDeEdad = persona => !esMayorDeEdad(persona);