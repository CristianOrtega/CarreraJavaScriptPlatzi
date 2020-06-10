var cristian = {
    nombre: 'Cristian',
    apellido: 'Ortega',
    altura: 1.74
}

var reinante = {
    nombre: 'Jose',
    apellido: 'Reinante',
    altura: 1.85
}

var michael = {
    nombre: 'Michael',
    apellido: 'Thumala',
    altura: 1.67
}

var angelo = {
    nombre: 'Angelo',
    apellido: 'Fecci',
    altura: 1.83
}

var array = [cristian, reinante, michael, angelo];

for (let i = 0; i < array.length; i++) {
    console.log(`${array[i].nombre} mide ${array[i].altura}cm.`);
}