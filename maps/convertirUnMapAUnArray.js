//Convierte el Map creado en el ejercicio 11 a un array de arrays
//export const mapToArray = map => [[...map.keys()], [...map.values()]]//esto hace un tupla de con la keys por un lado y por otro los values
export const mapToArray = map => {//esto hace un tupla con pares key,value
    const array = []
    map.forEach((value, key) => array.push([key, value]))
    return array
}