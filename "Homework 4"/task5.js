"use strict";

const number = parseInt(prompt("Please, enter a two-digit number!", 10));

const firstNumber = parseInt(number / 10);
const secondNumber = number % 10;

if (firstNumber > secondNumber) {
  console.log(
    `First number: ${firstNumber} is bigger then second number: ${secondNumber}`
  );
}

if (firstNumber < secondNumber) {
  console.log(
    `First number: ${firstNumber} is less then second number: ${secondNumber}`
  );
}

if (firstNumber === secondNumber) {
  console.log(`Numbers are equal`);
}
