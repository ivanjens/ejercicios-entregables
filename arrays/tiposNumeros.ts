import * as rs from 'readline-sync';
import { fillArray, typeNumber } from './modulos-array';

try{
    const ARRAY_SIZE: number = rs.questionInt("Ingresa la dimension del arreglo: ");
    const array: number[] = new Array(ARRAY_SIZE);
    const POS_CEROS = 0;
    const POS_POSITIVOS = 1;
    const POS_NEGATIVOS = 2;

    fillArray(array);

    // se podría crear una función por cada tipo de num (0, pos, neg) pero habría que recorrer el arreglo 3 veces
    // por eso se retorna el contador en un arreglo donde cada pos. es un tipo.
    // pos: 0 = cero - 1: positivos - 2: negativos
    let counter: number[] = typeNumber(array)
    let ceros: number = counter[POS_CEROS];
    let positivos: number = counter[POS_POSITIVOS];
    let negativos: number = counter[POS_NEGATIVOS];
    //console.clear();
    console.log(`Resultados:\n--------------\nCeros: ${ceros}\nPositivos: ${positivos}\nNegativos: ${negativos}`)
}catch(e){
    console.log('Upss.. algo salió mal. Asegurate de que el numero ingresado sea mayor a cero.')
}