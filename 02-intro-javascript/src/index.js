//Desestructuración 
//Asignación destructurante 

const persona = {
    nombre: 'Diana',
    edad:25,
    clave: '1234'
};

const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave);