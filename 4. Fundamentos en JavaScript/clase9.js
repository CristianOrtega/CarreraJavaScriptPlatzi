var x = 4, y = '4';

x == y // Compara los valores llevandolos a un mismo tipo de dato por ende esta comparación retorna true

x === y // Compara los valores y el tipo. En este caso la comparación retorna false ya que el 4 numerico no es igual al 4 string

var cristian = {
    nombre: 'Cristian'
};

var otraPersona = {
    nombre: 'Cristian'
};

cristian === otraPersona; // Retorna false, ya que los objetos apuntan a un lugar en la memoria a difrencias de variables con valores primitimos que si compara el tipo y valor.