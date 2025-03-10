import {getHeroeById} from './bases/08-import'

const promesa = new Promise( (resolve, reject) => {
    //resolve significa promesa exitosa
    //reject se ejecuta cuando falla algo 
    setTimeout(() => {
        getHeroeById(1)
    },2000)
}); //Son asincronas y se ejecutan después de que se ejecute todo lo sincrono 

promesa.then( () => {
});
