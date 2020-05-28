var operationValid = false;
var carsToAdd = null;
var carsArray = [];

// Función constructora
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// function para crear y agregar autos a al arreglo
function addCarsToArray(carsToAdd) {
    // Valida si el usuario agrego un valor y que sea tipo numérico
    if (carsToAdd === '' || isNaN(carsToAdd)) {
        alert('Debe ingresar un número. Intentelo nuevamente');
        return;
    }

    var carNumber = 1;
    var length = parseFloat(carsToAdd);

    for (var i = 0; i < length; i++) {
        var marca = null;
        var modelo = null;
        var annio = null;

        // Mostrará el mensaje hasta que el usuario ingrese una marca
        do {
            marca = prompt(`Ingrese marca del Auto #${carNumber}`)
        } while (!marca);

        // Mostrará el mensaje hasta que el usuario ingrese un modelo
        do {
            modelo = prompt(`Ingrese modelo del Auto #${carNumber}`);
        } while (!modelo);
        
        // Mostrará el mensaje hasta que el usuario ingrese un año
        do {
            annio = prompt(`Ingrese año del Auto #${carNumber}` );
        } while (isNaN(annio));

        // Se utiliza función constructora para crear el auto y agregarlo a la lista.
        carsArray.push(new auto(marca, modelo, annio));
        carNumber++;
    }

    console.log(carsArray);
    operationValid = true;
}

// Se repetirá el ciclo hasta que la operación de agregar carros sea exitosa.
do {
    carsToAdd = prompt('Ingrese la cantidad de autos que va a agregar');
    addCarsToArray(carsToAdd);
} while (!operationValid);
