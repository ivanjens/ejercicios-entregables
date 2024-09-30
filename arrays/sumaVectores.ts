import { fillArray } from './modulos-array';

const ARRAY_SIZE: number = 6;
let vector1: number[] = new Array(ARRAY_SIZE);
let vector2: number[] = new Array(ARRAY_SIZE);
let sumatoria: number[] = new Array(ARRAY_SIZE);


function sumarVectores(): void{
    for(let i: number = 0; i < ARRAY_SIZE; i++){
        sumatoria[i] = vector1[i] + vector2[i];
    }
    console.log(`Sumatoria de vectores completada: ${sumatoria}`);
}

fillArray(vector1);
fillArray(vector2);
sumarVectores();





