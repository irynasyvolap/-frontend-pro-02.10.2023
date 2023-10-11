"use strict";

const firstNumber = Number(prompt("Please, enter the first number!", 0));
const secondNumber = Number(prompt("Please, enter the second number!", 0));

const firstNumberlastDigit = firstNumber % 10;
const secondNumberlastDigit = secondNumber % 10;

console.log(firstNumberlastDigit);
console.log(secondNumberlastDigit);

// Перевірте, чи є остання цифра парною чи непарною за допомогою if...else
if (firstNumberlastDigit % 2 === 0) {
  console.log(
    `Остання цифра першого введеного числа ${firstNumberlastDigit} і вона є парною.`
  );
} else {
  console.log(
    `Остання цифра першого введеного числа ${firstNumberlastDigit} і вона є непарною.`
  );
}

if (secondNumberlastDigit % 2 === 0) {
  console.log(
    `Остання цифра другого введеного числа ${secondNumberlastDigit} і вона є парною.`
  );
} else {
  console.log(
    `Остання цифра другого введеного числа ${secondNumberlastDigit} і вона є непарною.`
  );
}
