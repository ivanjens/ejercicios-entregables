import * as rs from 'readline-sync';

// Se utiliza el tipo de dato 'Any' para poder utilizarlos con cualquier tipo de arreglos.
// La comprobación de los valores deberían hacerse fuera de estas funciones.

export function fillArray(array: Array<any>): void{
    const ARRAY_SIZE = array.length;
    for(let i: number = 0; i < ARRAY_SIZE; i++){
        array[i] = rs.question(`Pos. ${i} - Ingrese el valor para esta posicion: `)
    }
    console.log(`Array completado: ${array}`);
}

// retorna un nuevo arreglo con los valores invertidos (el 1ro es ultimo y viceverse) sin utilizar el método .reverse();
export function reverseArray(array: Array<any>): Array<any>{
    const ARRAY_SIZE = array.length;
    let newArray: any[] = new Array(ARRAY_SIZE);
    let position: number = ARRAY_SIZE-1;
    for(let i: number = 0; i < ARRAY_SIZE; i++){
            newArray[i] = array[position];
            position--;
    }
    return newArray;
}

// se podría crear una función por cada tipo de num (0, pos, neg) pero habría que recorrer el arreglo 3 veces
// por eso se retorna el contador en un arreglo donde cada pos. es un tipo.
// pos: 0 = cero - 1: positivos - 2: negativos
export function typeNumber(array: Array<number>): Array<number>{
    const ARRAY_SIZE = array.length;
    let ceros: number = 0
    let positivos: number = 0
    let negativos: number = 0

    for(let i: number = 0; i < ARRAY_SIZE; i++){
      if(array[i] == 0){
        ceros++;
      }
      if(array[i] > 0){
        positivos++;
      }
      if(array[i] < 0){
        negativos++;
      }
    }
    return [ceros,positivos,negativos];
}



