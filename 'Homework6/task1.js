"use strict";

const firstNumber = Number(prompt("Please, enter the first number!", 0));
const secondNumber = Number(prompt("Please, enter the second number!", 0));

if (firstNumber > secondNumber) {
  console.log(firstNumber + " bigger then " + secondNumber);
} else if (secondNumber > firstNumber) {
  console.log(secondNumber + " bigger then " + firstNumber);
} else {
  console.log(firstNumber + " and " + secondNumber + " are equal");
}
