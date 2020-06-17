const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';

const opts = { crossDomain: true};
const onPeopleReponse = function (persona) {
    console.log(`Hola soy ${persona.name}`);
    console.log(persona);
}

function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, onPeopleReponse);
}

obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);