const activo = true;

//const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
//const mensaje = ( activo ) ? 'Activo' : null;

//Condición ? (si se cumple la condición) resultado : 
//(si no se cumple la condición) resultado

const mensaje = !activo && 'Activo';

console.log(mensaje);