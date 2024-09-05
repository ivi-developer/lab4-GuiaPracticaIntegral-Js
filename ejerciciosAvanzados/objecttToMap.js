/* Dado un objeto { a: 1, b: 2, c: 3 }, transforma el objeto en un Map donde las 
claves son las propiedades del objeto y los valores son los valores 
correspondientes. */
export const objectToMap = obj => new Map(Object.entries(obj))