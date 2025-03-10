
const personajes = ['Goku', 'Vegeta', 'Trunks'];

const[, , p1] = personajes;

console.log(p1);

const retornaArreglo = () => {

    return ['ABC', 123]
}

const [letras, num] = retornaArreglo();

console.log(letras,num);

//TAREA

const usarEstado = (valor) => {
    return [valor, ()=>{console.log('Hola')}];

}

const arr = usarEstado('Goku');

console.log(arr);

const [nombre, setNombre] = usarEstado('Diana');
setNombre();