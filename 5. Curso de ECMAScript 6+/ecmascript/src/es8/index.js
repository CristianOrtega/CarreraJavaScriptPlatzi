const data = {
    frontend: 'Cristian',
    backend: 'Erick',
    design: 'Ana',
}


const entries = Object.entries(data);
console.log(entries);
// Con esto se puede saber cuandos elementos posee un objeto
console.log(entries.length);


// devuelve los valores de un objeto a un arreglo;
const data = {
    frontend: 'Cristian',
    backend: 'Erick',
    design: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

// padding
const string = 'hello';
console.log(string.padStart(8, 'hi '));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, ' -----'));


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test error.'));
    });
}

const helloAsync = async () => {
    const hello = await helloWorld();
    //const hello2 = await 
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
