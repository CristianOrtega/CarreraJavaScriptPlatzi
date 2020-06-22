// funcion antes de ecmascript 6
function newFunction (name, age, country) {
    let name = name || 'Cristian';
    let age = age || 27;
    let country = country || 'Chile';

    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Cristian', age = 27, country = 'Chile') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Francisco', 29, 'Chile');

// Template Literals

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;
//console.log(epicPhrase);

const epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = 'lorem ipsum dolor sit amet \n'
            + 'otra frase epica que necesitamos.';

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica.`;

console.log(lorem);
console.log(lorem2);

// Destructuracion de elementos.

let person = {
    name: 'Cristian',
    age: 27,
    country: 'CL'
}

console.log(person.name, person.age, person.country);

// es6
const { name, age, country } = person;
console.log(name, age, country);

// Spread Operator - Operador de propagacion
let team1 = ['Cristian', 'Erick', 'Jose Luis'];
let team2 = ['Jaime', 'Rafael', 'Carlos'];

let clave = ['Fabian', ...team1, ...team2];

console.log(clave);

{
    var globalVar = 'Global var';
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet); lanza error de contexto

const a = 'b';

let name2 = 'Cristian';
let age2 = 27;

// es5
obj = {name2: name2, age2: age2};

// es6
obj2 = { name2, age2 };
console.log(obj2);

const names = [
    { name: 'Cristian', age: 27 },
    { name: 'Francisca', age: 27}  
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
});

//es6 

let listOfNames2 = names.map(item => console.log(item.name));

/*const listOfNames3 = (name, age, country) => {
    ...
};

const listOfNames4 = name => {
    ...
};*/

const square = num => num * num;

// Promesas

const helloPromise = () => {
    return new Promise((result, reject) => {
        if (true) {
            result('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
        .then(response => console.log(response))
        .catch(error => console.log(error));


// Clases

class Calculator {

    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valuaA, valueB) {
        this.valueA = valuaA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new Calculator();
console.log(calc.sum(2,2));

// Módulos

import { hello } from './module'; 

hello();

// Generadores

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);