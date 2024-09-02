//Accede al valor de "nombre" en el Map creado y muéstralo
export const accederUnValorDeMap = (map, key, callback) => callback(map.get(key))