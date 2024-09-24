import * as rs from 'readline-sync';

/* ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de `Sabor`, `Presentación` y `Dificultad` para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra. */

let participantes: number;
const NOTA_MINIMA: number = 1;
const NOTA_MAXIMA: number = 5;

do{
    participantes = rs.questionInt('Ingrese la cantidad de participantes: ');
} while(participantes <= 0);


// recorre la cantidad de participantes y retorna que participante sacó más puntos
const determinarGanador = () : number =>{
    let ganador: number = 0;
    let mejorPuntuacion: number = 0;
    for(let i: number = 1; i <= participantes; i++){ // ganador = 0 es empate, el index se inicializa en 1 para evitar retornar ganador + 1 
        let puntuacionParticipante: number = evaluarParticipante(i);
        if(puntuacionParticipante > mejorPuntuacion){
            ganador = i;
            mejorPuntuacion = puntuacionParticipante;
        } else if(puntuacionParticipante === mejorPuntuacion){
            ganador = 0;
        }    
    }
    return ganador;
}

// calcula y retorna el puntaje de la torta
const calcularPuntaje = (sabor: number, dificultad: number, presentacion: number) : number =>{
    return sabor + dificultad + presentacion;
}

// solicita las puntuaciones de cada torta y retorna la sumatoria de la misma
const evaluarParticipante = (nroParticipante: number) : number =>{
    let sabor: number;
    let presentacion: number;
    let dificultad: number;
    do{
       sabor = rs.questionInt(`Participante Nro ${nroParticipante}. Cual es la puntuacion del sabor? (Nota: 1-5): `);
    }while(NOTA_MINIMA > sabor || sabor > NOTA_MAXIMA);
    do{
        presentacion = rs.questionInt(`Participante Nro ${nroParticipante}. Cual es la puntuacion de la presentacion? (Nota: 1-5): `); 
     }while(NOTA_MINIMA > presentacion || presentacion > NOTA_MAXIMA);
     do{
        dificultad = rs.questionInt(`Participante Nro ${nroParticipante}. Cual es la puntuacion de la dificultad? (Nota: 1-5): `); 
     }while(NOTA_MINIMA > dificultad || dificultad > NOTA_MAXIMA); 
    return calcularPuntaje(sabor, presentacion, dificultad);
}


let ganador = determinarGanador();
console.log(ganador === 0 ? "Hay un empate en el concurso." : `La torta ganadora del concurso es la del participante N° ${ganador}`);