/* Dado un array de objetos [{ nombre: "Juan", edad: 20 }, { nombre: "María", 
    edad: 25 }, { nombre: "Pedro", edad: 30 }], usa map para crear un nuevo array 
    de strings que contenga solo los nombres */
export const mapearArrayObeject = (array, campo) => array.map(a => a[campo])//se puede acceder al value mediante [key]
/* Dado un array de números [2, 3, 4, 2, 3, 5, 4, 5, 6], utiliza un Map para contar 
cuántas veces aparece cada número en el array. El resultado debe ser un Map 
donde las claves sean los números del array y los valores sean la cantidad de 
veces que cada número aparece */
export const mapearArrayAMap = array => {
    const map = new Map()
    array.forEach(a => map.has(a) ? map.set(a, map.get(a) + 1) : map.set(a, 1))//para cada valor en el arreglo si se encuentra como key, se setea la key con su value incrementado, sino se setea la key con value 1
    return map
}