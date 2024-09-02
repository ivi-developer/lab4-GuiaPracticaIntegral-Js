//Comprueba si el número 4 existe en el Set creado anteriormente y muestra el resultado
export const existeEnSet = (set, num, callback) => callback(set.has(num))