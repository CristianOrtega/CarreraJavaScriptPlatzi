const cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27
}

const cumpleanos = persona => persona.edad++;

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
});