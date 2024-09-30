import * as rs from 'readline-sync';
import { fillArray, reverseArray } from './modulos-array';

try{
    const ARRAY_SIZE: number = rs.questionInt("Ingresa la dimension del arreglo: ");
    const array: number[] = new Array(ARRAY_SIZE); 
    let invertedArray: number[] = new Array(ARRAY_SIZE);

    fillArray(array);
    invertedArray = reverseArray(array);
    console.clear();
    console.log(`Resultado de invertir el arreglo original [${array}]:\n[${invertedArray}]`)
}catch(e){
    console.log('Upss.. algo salió mal. Asegurate de que el numero ingresado sea mayor a cero.')
}
