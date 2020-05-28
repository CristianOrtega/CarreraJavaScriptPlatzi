// Ejemplo de scope Global y Local.

var miNombre = 'Cristian';

function nombre() {
    var miApellido = 'Ortega';
    console.log(miNombre + ' ' + miApellido);
}

nombre();

console.log(miApellido); // miApellido is not defined.