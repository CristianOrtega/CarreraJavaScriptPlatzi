class Persona {
    
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar(responder) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
        if (responder) {
            responder(this.nombre, this.apellido);
        }
    }

    soyAlto() {
        return this.altura > 1.8;
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar(responder) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        if (responder) {
            responder(this.nombre, this.apellido, true);
        }
    }

}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Wow! no sabía que eras desarrollador/a.`);
    } 
    console.log(`---------------------------------------`);
}

var cristian = new Desarrollador('Cristian', 'Ortega', 1.74);
var erick = new Persona('Erick', 'Salinas', 1.80);
var jaime = new Persona('Jaime', 'Cisternas', 1.77);

cristian.saludar(responderSaludo);
erick.saludar(responderSaludo);
jaime.saludar(responderSaludo);

/*class Persona{
    constructor (nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}${this.apellido}`)
    }
    soyAlto() {
        return this.altura >= 1.7
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
     }

     saludar () {
        console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador /a`)
     }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre}${apellido}`)
    if (esDev) {
        console.log (`Ah mirá, no sabpia que eras desarrollador /a`)
    }
}

var adriana = new Persona('adriana', 'ardila', 1.50);
var aron = new Persona('aron', 'luna', 1.65);
var andres = new Persona('andres', 'lopez', 1.80); 

adriana.saludar()
aron.saludar()
andres.saludar()*/