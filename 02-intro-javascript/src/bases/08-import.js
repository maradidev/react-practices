import {heroes, owners } from '../data/heroes';


export const getHeroeById = (id) => heroes.find(x => x.id === id);

export const getOwnerById = (owner) => {

    const myHeroes = [];
    myHeroes.push(heroes.filter(x => x.owner === owner));
    return myHeroes;
}



console.log(owners);

console.log(getOwnerById('Marvel'));

