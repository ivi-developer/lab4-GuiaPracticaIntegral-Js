import { callbackDeFiltrarPares, filtrarPares } from "./callbacks/filtrarNumerosParesConUnCallback.js";
import { multiplicar } from "./callbacks/multiplicarNumerosConCallback.js";
import { operarNumeros, resta, suma } from "./callbacks/operacionesConNumerosUsandoCallbacks.js";
import { funcionAsincronica } from "./callbacks/usoDeSetTimeoutConCallbacks.js";
import { accederUnValorDeMap } from "./maps/accederAValoresEnUnMap.js";
import { tieneKey } from "./maps/comprobarExistenciaEnUnMap.js";
import { mapToArray } from "./maps/convertirUnMapAUnArray.js";
import { crearMap, manipularMap } from "./maps/crearYManipularUnMap.js";
import { iterarTodoElMap } from "./maps/iterarSobreUnMap.js";
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
console.log(manipularMap(crearMap()))
accederUnValorDeMap(crearMap(), 'nombre', msj => console.log(msj))
iterarTodoElMap(crearMap(), (value, key) => console.log(`key: ${key} = value: ${value}`))//el forEach de map recive PRIMERO VALUE, SEGUNDO KEY, ultimo el map
tieneKey(crearMap(), 'nombre', msj => console.log(msj))
console.log(mapToArray(crearMap()))