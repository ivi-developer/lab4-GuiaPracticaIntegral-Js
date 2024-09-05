import { pasarAMays } from "./arrays/convertirArrayMays.js";
import { doblarArray } from "./arrays/doblarNumero.js";
import { filtrarMayores } from "./arrays/filtrarMayores.js";
import { filtrarPorLongitud } from "./arrays/filtrarPorLongitud.js";
import { sumaPares } from "./arrays/sumaPares.js";
import { callbackDeFiltrarPares, filtrarPares } from "./callbacks/filtrarNumerosParesConUnCallback.js";
import { multiplicar } from "./callbacks/multiplicarNumerosConCallback.js";
import { operarNumeros, resta, suma } from "./callbacks/operacionesConNumerosUsandoCallbacks.js";
import { funcionAsincronica } from "./callbacks/usoDeSetTimeoutConCallbacks.js";
import { sumaDeCuadradosDePares } from "./ejerciciosAvanzados/encadenamientosDeMetodos.js";
import { mapToObject } from "./ejerciciosAvanzados/mapToObject.js";
import { objectToMap } from "./ejerciciosAvanzados/objecttToMap.js";
import { filtrarArrayObject } from "./ejerciciosAvanzados/objetosYFilter.js";
import { mapearArrayAMap, mapearArrayObeject } from "./ejerciciosAvanzados/objetosYMap.js";
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
console.log(filtrarMayores([5, 10, 15, 20, 25], 10))
console.log(doblarArray([1, 2, 3, 4, 5]))
console.log(pasarAMays(["juan", "maria", "pedro"]))
console.log(filtrarPorLongitud(["árbol", "casa", "elefante", "sol"], 5))
console.log(sumaPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(mapearArrayObeject([{ nombre: "Juan", edad: 20 }, { nombre: "María", edad: 25 }, { nombre: "Pedro", edad: 30 }], 'nombre'))
console.log(filtrarArrayObject([{ nombre: "Carlos", edad: 18 }, { nombre: "Ana", edad: 23 }, { nombre: "Luis", edad: 16 }], 18))
console.log(mapearArrayAMap([2, 3, 4, 2, 3, 5, 4, 5, 6]))
console.log(sumaDeCuadradosDePares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(objectToMap({ a: 1, b: 2, c: 3 }))
console.log(mapToObject([["nombre", "Pedro"], ["edad", 30], ["ciudad", "Sevilla"]]))