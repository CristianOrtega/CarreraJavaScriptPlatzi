function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

var cristian = new Persona('Cristian', 'Ortega', 1.74);
var erick = new Persona('Erick', 'Salinas', 1.80);

cristian.soyAlto();
erick.soyAlto();