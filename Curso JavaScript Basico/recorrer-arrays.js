var articulos = [
    {
        nombre: 'Bici',
        costo: 3000
    },
    {
        nombre: 'TV',
        costo: 2500
    },
    {
        nombre: 'Libro',
        costo: 320
    },
    {
        nombre: 'Celular',
        costo: 10000
    },
    {
        nombre: 'Laptop',
        costo: 20000
    },
    {
        nombre: 'Teclado',
        costo: 500
    },
    {
        nombre: 'Audifonos',
        costo: 1700
    }
];

 // Filter ayuda a filtrar ciertas cosas. Valida si algo es verdad o falso y lo mete en un nuevo array. Este metodo no modifica el array que estas trabajando.
 var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
 });

 console.log(articulosFiltrados);

 // Map ayuda a mapear ciertos articulos. De igual forma genera un nuevo array sin modificar el array que utilizamos.
 var nombreArticulos = articulos.map(function(articulo) {
    return articulo.nombre;
 });

 // Find genera un nuevo array y tiene la finalidad de encontrar una variable solicitada si es que lo encuentra.
var encuentraArticulos = articulos.find(function (articulo) {
    return articulo.nombre === 'Laptop';
});

 // ForEach no genera un nuevo array, solo filtra el array y devuelve variables sobre la base de los parámetros otorgados.
articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

 // Some genera un nuevo array, pero solo entrega la validación de true o false sobre la base de criterios otorgados.
 var articulosBaratos = articulos.some(function(articulo) {
    return articulos.costo <= 700;
 });
 
// .push(); agrega elementos al final del array.
// .pop(); elimina el último elemento del array.
// .shift(); elimina el primer elemento del array.
// .unshift('elemento'); agrega un elemento al comienzo de una array.