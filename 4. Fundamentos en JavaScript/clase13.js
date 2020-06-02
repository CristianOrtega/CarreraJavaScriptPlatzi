var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27,
    peso: 75
}

const DIAS_ANIO = 365;
const INCREMENTO_PESO = 0.2;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


console.log(`Al inicio del año ${cristian.nombre} pesa ${cristian.peso}kg.`);

for (let i = 0; i < DIAS_ANIO; i++) {
    var random = Math.random();
    
    if (random < 0.25) {
        aumentarDePeso(persona);
    } else if (random < 0.50) {
        adelgazar(persona);
    }
}

console.log(`Al final del año ${cristian.nombre} pesa ${cristian.peso.toFixed(1)}kg.`);