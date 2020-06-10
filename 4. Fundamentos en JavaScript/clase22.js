function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

const ES_ALTO = 1.80;

const esAlta = ({ altura }) => altura >= ES_ALTO;

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
}

Persona.prototype.soyAlto = function () {
    if (esAlta(this)) {
        console.log(`${this.nombre} ${this.apellido} mide ${this.altura} metros. Es considerado una persona alta.`);
    } else {
        console.log(`${this.nombre} ${this.apellido} mide ${this.altura} metros. Es considerado una persona baja.`);
    }
}


var cristian = new Persona('Cristian', 'Ortega', 1.74);
var erick = new Persona('Erick', 'Salinas', 1.80);

cristian.soyAlto();
erick.soyAlto();