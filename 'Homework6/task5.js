"use strict";

const number1 = Number(prompt("Введіть перше двозначне число:"));
const number2 = Number(prompt("Введіть друге двозначне число:"));

if (number1 >= 10 && number1 <= 99 && number2 >= 10 && number2 <= 99) {
  const firstDigitNumber1 = Math.floor(number1 / 10);
  const secondDigitNumber1 = number1 % 10;

  const firstDigitNumber2 = Math.floor(number2 / 10);
  const secondDigitNumber2 = number2 % 10;

  if (firstDigitNumber1 > firstDigitNumber2) {
    console.log(
      "Перша цифра числа " + number1 + " більша за першу цифру числа " + number2
    );
  } else if (firstDigitNumber2 > firstDigitNumber1) {
    console.log(
      "Перша цифра числа " + number2 + " більша за першу цифру числа " + number1
    );
  } else {
    console.log("Перші цифри обох чисел рівні.");
  }

  if (secondDigitNumber1 > secondDigitNumber2) {
    console.log(
      "Друга цифра числа " + number1 + " більша за другу цифру числа " + number2
    );
  } else if (secondDigitNumber2 > secondDigitNumber1) {
    console.log(
      "Друга цифра числа " + number2 + " більша за другу цифру числа " + number1
    );
  } else {
    console.log("Другі цифри обох чисел рівні.");
  }
} else {
  console.log("Будь ласка, введіть двозначні числа.");
}
