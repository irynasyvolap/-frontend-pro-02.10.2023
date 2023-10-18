"use strict";

const number = parseInt(prompt("Please, enter a third-digit number!", 111));

const firstNumber = parseInt(number / 100);
const secondNumber = parseInt((number / 10) % 10);
const thirdNumber = number % 10;

if (firstNumber === secondNumber && secondNumber === thirdNumber) {
  console.log(`All digits are the same`);
}

if (
  firstNumber === secondNumber ||
  secondNumber === thirdNumber ||
  firstNumber === thirdNumber
) {
  console.log(`Digits has the pairs`);
}
