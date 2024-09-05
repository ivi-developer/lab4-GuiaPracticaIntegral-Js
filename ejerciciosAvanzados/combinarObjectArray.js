/* Dado dos arrays de objetos: estudiantes con propiedades id y nombre, y notas 
con propiedades idAlumno y nota, usa filter y map para combinar ambos 
arrays en uno nuevo que contenga el nombre del alumno y su nota 
correspondiente. */
export const combinarObjectArray = (array1, array2) => {
    return array1.map(a => {
        const nota = array2.filter(b => b.idAlumno === a.id)[0]//esto seria mejor hacerlo con un find, pero lo pedia lo consgia, mapeas en el arreglo de estudientes un arreglo con los que tenga la id y accedes a la primer posicion y unica de este y retornas el nombre con la nota
        return { 'nombre': a.nombre, 'nota': nota.nota }
    })
}