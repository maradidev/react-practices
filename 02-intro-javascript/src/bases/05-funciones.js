
function saludar(nombre){
    return `Hola, ${nombre}`
}


const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre) => `Hola, ${nombre}`;

const getUser = () => ({
        uid: 'ABCD',
        username: 'dianam'
});

const getUsuarioActivo = (nombre) => ({uid: 'ABC', username:nombre});
 
console.table(getUsuarioActivo('Juan'));