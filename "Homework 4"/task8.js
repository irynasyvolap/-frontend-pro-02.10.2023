"use strict";

const number = parseInt(prompt("Enter a six digit number", 123321));

const number1 = parseInt(number / 100_000);
const number2 = parseInt((number / 10_000) % 10);
const number3 = parseInt((number / 1000) % 10);
const number4 = parseInt((number / 100) % 10);
const number5 = parseInt((number / 10) % 10);
const number6 = number % 10;

const isPalindrome =
  number1 === number6 && number2 === number5 && number3 === number4;

if (isPalindrome) {
  console.log(`Number: ${number} is palindrome`);
}
