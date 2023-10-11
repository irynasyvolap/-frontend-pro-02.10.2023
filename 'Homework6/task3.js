"use strict";

const firstNumber = Number(prompt("Please, enter the first number!", 0));
const secondNumber = Number(prompt("Please, enter the second number!", 0));

// Перевіряємо, чи a є дільником b
if (secondNumber % firstNumber === 0) {
  console.log(`${firstNumber} є дільником ${secondNumber}`);
} else {
  console.log(`${firstNumber} не є дільником ${secondNumber}`);
}

// Перевіряємо, чи b є дільником a
if (firstNumber % secondNumber === 0) {
  console.log(`${secondNumber} є дільником ${firstNumber}`);
} else {
  console.log(`${secondNumber} не є дільником ${firstNumber}`);
}
