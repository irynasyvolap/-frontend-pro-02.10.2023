"use strict";

const firstNumber = parseInt(prompt("Please, enter the first number!", 0));
const secondNumber = parseInt(prompt("Please, enter the second number!", 0));

if (secondNumber % firstNumber === 0) {
  console.log(`${firstNumber} є дільником ${secondNumber}`);
} else {
  console.log(`${firstNumber} не є дільником ${secondNumber}`);
}

if (firstNumber % secondNumber === 0) {
  console.log(`${secondNumber} є дільником ${firstNumber}`);
} else {
  console.log(`${secondNumber} не є дільником ${firstNumber}`);
}
