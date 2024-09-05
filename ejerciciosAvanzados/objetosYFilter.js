/* Dado un array de objetos [{ nombre: "Carlos", edad: 17 }, { nombre: "Ana", 
    edad: 23 }, { nombre: "Luis", edad: 16 }], usa filter para obtener solo los objetos 
    donde la persona sea mayor de edad (edad >= 18). */
export const filtrarArrayObject = (array, num) => array.filter(a => a.edad >= num)