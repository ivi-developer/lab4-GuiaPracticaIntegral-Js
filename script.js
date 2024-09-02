import { callbackDeFiltrarPares, filtrarPares } from "./callbacks/filtrarNumerosParesConUnCallback.js";
import { multiplicar } from "./callbacks/multiplicarNumerosConCallback.js";
import { operarNumeros, resta, suma } from "./callbacks/operacionesConNumerosUsandoCallbacks.js";
import { funcionAsincronica } from "./callbacks/usoDeSetTimeoutConCallbacks.js";
multiplicar(5, 6, num => console.log(num))
console.log(operarNumeros(6, 3, suma))
console.log(operarNumeros(7, 2, resta))
funcionAsincronica(() => console.log('esto es un callback'))
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9], callbackDeFiltrarPares))
