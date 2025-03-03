
const persona = {
    nombre: 'Diana',
    apellido: 'Niebla',
    edad: 54,

    direccion: {
        calle: 'Privada 1',
        numero: 23,
        zip: 900,
    }
};

console.log(
    persona
);

const persona2 = {...persona};
persona2.nombre='Luis';

console.log(persona2);
console.log(persona.nombre)

