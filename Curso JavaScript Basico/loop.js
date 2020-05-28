var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

/* En conclusión, el for…of se va a ejecutar de acuerdo al número de elementos de un arrar, si en un array hay 11 elementos 
*  el for…of se va a ejecutar 11 veces. Y en el for es necesario tener 3 parámetros (var; condición; constante), 
*  la variable se inicializa, se coloca una condición con la variable y se ejecuta una constante hasta que la condición deje de cumplirse. 
*/

while (estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

// Por otro lado, While ejecuta un ciclo de acción mientras una validación sea verdad. Una vez deje de ser cierta el ciclo se rompe.