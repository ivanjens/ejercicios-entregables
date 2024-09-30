import * as rs from 'readline-sync';

const names: string[] = ["Jorge", "Guido", "Candela", "Sofia", "Carolina"];
let nameToFind: string = rs.question("Cual es el nombre que desea buscar?: ");
let found: boolean = false;

const findName = (name: string): boolean =>{
    const arraySize = names.length;
    for(let i: number = 0; i < arraySize; i++){
        if(names[i].toLowerCase() === name.toLowerCase()){
            return true;
        }
    }
    return false;
}

found = findName(nameToFind);
console.log(found === true ? "El nombre se encuentra en la lista.": "El nombre no se encuentra en la lista.");

