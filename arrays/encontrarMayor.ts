
const numbers: number[] = [4,7,9,3,1,45,67,23,29,78,11,16];
const arraySize: number = numbers.length;
let largestNumber: number = 0;
let isLargestEven: boolean;

for(let i: number = 0; i < arraySize; i++){
    if(numbers[i] > largestNumber){
        largestNumber = numbers[i];
    }
}
console.log(`El mayor numero dentro del array es ${largestNumber}`);

const isEven = (number: number): boolean =>{
    return number % 2 === 0;    
}

isLargestEven = isEven(largestNumber);
console.log(isLargestEven ? `${largestNumber} es par.` : `${largestNumber} es impar.`);


