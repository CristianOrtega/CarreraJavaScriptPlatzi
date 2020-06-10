var signo = prompt('¿Cuál es tu signo?');
var signoToLowerCase = signo.toLowerCase();

switch(signoToLowerCase) {
    case 'acuario':
        console.log('ingreso signo acuario');
        break;
    case 'piscis':
        console.log('ingreso signo piscis');
        break;
    case 'cancer':
        console.log('ingreso signo cancer');
        break;
    case 'leo':
        console.log('ingreso signo leo');
        break;
    default:
        break;
    
}