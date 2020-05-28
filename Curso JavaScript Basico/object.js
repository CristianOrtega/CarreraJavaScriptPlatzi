var miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} Año ${this.annio}`);
    }
};

// Objects: Función constructora

function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto('Tesla', 'Model 3', 2020);


