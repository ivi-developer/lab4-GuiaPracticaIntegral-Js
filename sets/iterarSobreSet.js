//Itera sobre el Set creado en el ejercicio 6 e imprime cada número
export const iterarSobreSet = (set, callback) => set.forEach(callback)
//callback no lleva parentesis, porque es el contenido del callback lo que se pasa por parametro al forEach, NO el resultado de esta