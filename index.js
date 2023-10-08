"use strict";

let firstNumber;
let secondNumber;

firstNumber = prompt("Введіть перше число:");
secondNumber = prompt("Введіть друге число:");

let sum = firstNumber + secondNumber;
let diff = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

let resultNumbers = `
Calculations є finished!
Sum: ${firstNumber} + ${secondNumber} = ${sum}
Diff: ${firstNumber} - ${secondNumber} = ${diff}
Mult: ${firstNumber} * ${secondNumber} = ${mult}
Div: ${firstNumber} / ${secondNumber} = ${div}
`;

alert(resultNumbers);
