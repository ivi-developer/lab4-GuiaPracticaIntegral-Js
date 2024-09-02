//Comprueba si el Map tiene la clave "edad" y muestra el resultado
export const tieneKey = (map, key, callback) => map.has(key) ? callback(map.get(key)) : callback('no se encontro la key')
