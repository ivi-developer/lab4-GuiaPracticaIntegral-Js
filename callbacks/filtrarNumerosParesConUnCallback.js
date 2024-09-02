//Define una función filtrarPares que acepte un array de números y un callback
export const filtrarPares = (array, callback) => callback(array)
//Usa el callback para filtrar solo los números pares
export const callbackDeFiltrarPares = (array => array.filter(a => a % 2 == 0))