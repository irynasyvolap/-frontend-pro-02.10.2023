"use strict";

const number = parseInt(prompt("Please, enter a two-digit number!", 10));

const numberlastDigit = number % 10;

console.log(numberlastDigit);

if (numberlastDigit % 2 === 0) {
  console.log(
    `Остання цифра першого введеного числа ${numberlastDigit} і вона є парною.`
  );
} else {
  console.log(
    `Остання цифра першого введеного числа ${numberlastDigit} і вона є непарною.`
  );
}
