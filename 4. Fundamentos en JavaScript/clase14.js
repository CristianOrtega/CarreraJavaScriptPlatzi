var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    edad: 27,
    peso: 70
}

const DIAS_ANIO = 365;
const INCREMENTO_PESO = 0.2;
const META = sasha.peso - 3;
var dias = 0;

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;


console.log(`Al inicio del año ${cristian.nombre} pesa ${cristian.peso}kg.`);

while (cristian.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(cristian);
    }

    if (realizaDeporte()) {
        adelgazar(cristian);
    }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${persona.nombre} adelgazó 3kg.`);