//Define una función operarNumeros que acepte dos números y un callback.
export const operarNumeros = (num1, num2, callback) => callback(num1, num2)
//Crea dos callbacks, uno para sumar y otro para restar los números.
export const suma = (num1, num2) => num1 + num2
export const resta = (num1, num2) => num1 - num2