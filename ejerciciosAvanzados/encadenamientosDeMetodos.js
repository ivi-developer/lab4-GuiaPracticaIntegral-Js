/* Dado un array de números [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], usa una combinación de 
filter, map, y reduce para obtener la suma de los cuadrados de los números 
pares */
export const sumaDeCuadradosDePares = array => array.filter(a => a % 2 == 0).map(a => a * a).reduce((a, b) => a + b, 0)