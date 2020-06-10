const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true};
const onPeopleReponse = function (persona) {
    console.log(`Hola soy ${persona.name}`);
    console.log(persona);
}


$.get(lukeUrl, opts, onPeopleReponse);