const nombre = 'Fernando';
const apellido = 'Hernández';

const nombreCompleto = `${nombre} ${apellido}`


function getSaludo(nombre){
    return `Hola, ${nombre}`
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)