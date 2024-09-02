//Crea un Map con tres entradas: "nombre" -> "Juan", "edad" -> 30, "ciudad" -> "Madrid".
export const crearMap = () => new Map([['nombre', 'juan'], ['edad', 30], ['ciudad', 'madrid']])//el constructor de set puede recibir un iterable con key,values(arreglo de arreglos)
//Añade una nueva entrada para "país" -> "España" y elimina la entrada "ciudad".
export const manipularMap = map => {
    map.set('pais', 'Spain').delete('ciudad')//cuando agregas un key,value con set le pasas los dos como paremtros, no como un arreglo
    return map//al igual que en set los metodos de modificar el set retornar booleano, por eso es necesario retornar la coleccion
}