function crearSaludos(finalDeFrase) {
    return function (nombre) {
        console.log(`Hola ${nombre} ${finalDeFrase}`);
    }
}

const saludarArgentino = crearSaludos('che');
const saludarChileno = crearSaludos('po');
const saludarMexicano = crearSaludos('wey');


saludarArgentino('Cristian');
saludarChileno('Cristian');
saludarMexicano('Cristian');