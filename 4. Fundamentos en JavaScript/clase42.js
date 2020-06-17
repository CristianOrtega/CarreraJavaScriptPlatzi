const cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega'
};

const pancha = {
    nombre: 'Francisca',
    apellido: 'Aguilera'
};

function saludar(saludo = 'Hola') {
    console.log(`${saludo}, mi nombre es ${this.nombre}`);
}

//const saludarACristian = saludar.bind(cristian);
//const saludarAPancha = saludar.bind(pancha);

//setTimeout(saludar.bind(cristian, 'Holi'), 1000);

// La ejecuta en el momento
saludar.call(cristian, 'Holi'); 

saludar.apply(cristian, ['Hola compadre']);