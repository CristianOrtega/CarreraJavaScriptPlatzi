const obj = {
    name: 'Cristian',
    age: 27,
    country: 'CL'
};

let { name, ...all } = obj;
// Aqui se desestrura el objeto, sacando las key que nos interesa. En este caso es el nombre, y para no escribir el resto de los 
// elementos que no queremos utilizamos el ...all
console.log(name, all);

// (...) es conocido como el operador de propagación, con este, podemos traer todos los keys con sus respectivos values de objeto
// como se ve en el siguiente caso:

const obj1 = {
    ...obj,
    hight: 1.75
}
console.log(obj1);

// Como se puede ver en el obj1, tiene todos los keys del obj y además agregamos un nuevo key.


// finally esto nos dice cuando termina el llamado, puediendo agregar alguna nueva funcionalidad
// en caso de ser necesario.

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello Wolrd'), 3000)
            : reject(new Error('Test error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('finalizo'));

// Se han añadido mejoras al Regex
// Esto es util al momento de trabajar con fechas, como sabemos, las fechas tienen
// año, mes y días. el [0-9] nos indica el rango de números, mientras que el {4} nos indica 
// que se necesitan máximo 4 números.

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-06-22');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(day, month, year);