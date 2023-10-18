"use strict";

const number = parseInt(prompt("Please, enter a third-digit number!", 111));

const firstNumber = parseInt(number / 100);
const secondNumber = parseInt((number / 10) % 10);
const thirdNumber = number % 10;

const sum = firstNumber + secondNumber + thirdNumber;
const mult = firstNumber * secondNumber * thirdNumber;

if (sum % 2 === 0) {
  console.log(`Sum of all digits is even`);
}

if (sum % 5 === 0) {
  console.log(`The sum of all digits is a multiple of 5`);
}

if (mult > 100) {
  console.log(`Multiplication of all digits is bigger then 100`);
}
