//Ejercicio

var options = null
var playerOption = null
var cpu = null

function init() {
    options = ['Piedra', 'Papel', 'Tijera'];
    playerOption = prompt('Escoja entre Piedra, Papel o Tijera');
    cpu = options[Math.floor(Math.random() * 3)];
}

function play(playerOption, cpu) {
    if (playerOption === 'Piedra' 
        || playerOption === 'Papel' 
        || playerOption === 'Tijera') {
        let result = '';
        if (playerOption === cpu) {
            result = 'Empate! Vuelve a intertarlo para vencer a la maquina.';
        } else if ((playerOption === 'Piedra' && cpu === 'Tijera') 
            || (playerOption === 'Tijera' && cpu === 'Papel') 
            || (playerOption === 'Papel' && cpu === 'Piedra')) {
            result = 'Ganaste! Derrotaste a la maquina';
        } else {
            result = 'La maquina te ha vencido! Vuelve a internarlo.';
        }
        alert(result)
    } else {
        alert('Usted no ingrese una opcion valida, favor intente nuevamente.');
        init();
        play();
    }
}

init();
play(playerOption, cpu);