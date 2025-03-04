//Desestructuración 
//Asignación destructurante 

const persona = {
    nombre: 'Diana',
    edad:25,
    clave: '1234',
    rango: 'Soldado'
};

const {nombre, edad, rango} = persona;

//console.log(nombre, rango);

const returnPersona = ({clave, edad, lating}) => {
    //console.log(nombre, edad);
    return{
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}


const {nombreClave, anios, lating:{lat, lng}} = returnPersona(persona);

console.log(nombreClave, anios);
//EXTRAER OBJETOS ANIDADOS Y PONERLOS EN CONSTANTE DIRECTAMENTE
console.log(lat, lng);