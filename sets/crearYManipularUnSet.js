//Crea un Set con los números 1, 2, 3, 4, y 5
//Añade el número 6 y elimina el número 3
export const crearSet = () => {
    const set = new Set([1, 2, 3, 4, 5])//el arreglo que se le pasa al set no hace falta esparcirlo
    set.add(6).delete(3)//no se pueden concatenar de una los metodos para agregar y sacar porque estos retornar valores, que se le asignarian a la variable o como retorno
    return set
}