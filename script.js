import { callbackDeFiltrarPares, filtrarPares } from "./callbacks/filtrarNumerosParesConUnCallback.js";
import { multiplicar } from "./callbacks/multiplicarNumerosConCallback.js";
import { operarNumeros, resta, suma } from "./callbacks/operacionesConNumerosUsandoCallbacks.js";
import { funcionAsincronica } from "./callbacks/usoDeSetTimeoutConCallbacks.js";
import { crearMap } from "./maps/crearMap.js";
import { existeEnSet } from "./sets/comprobarExistenciaEnUnSet.js";
import { convertirSetAArray } from "./sets/convertirUnSetAUnArray.js";
import { crearSet } from "./sets/crearYManipularUnSet.js";
import { eliminiarDuplicados } from "./sets/eliminarDuplicadosDeUnArrayUsandoSet.js";
import { iterarSobreSet } from "./sets/iterarSobreSet.js";
multiplicar(5, 6, num => console.log(num))
console.log(operarNumeros(6, 3, suma))
console.log(operarNumeros(7, 2, resta))
funcionAsincronica(() => console.log('esto es un callback'))
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9], callbackDeFiltrarPares))
console.log(crearSet())
console.log(convertirSetAArray(crearSet()))
console.log(eliminiarDuplicados([1, 2, 2, 3, 4, 4, 5]))
existeEnSet(crearSet(), 4, msj => console.log(msj))
iterarSobreSet(crearSet(), a => console.log(a))
console.log(crearMap())