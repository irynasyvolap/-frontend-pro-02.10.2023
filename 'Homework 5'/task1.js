"use strict";

alert("Welcome to calculator!");

const whatAction = prompt(
  "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
);
const firstNumber = parseInt(prompt("Enter the first number"));
const secondNumber = parseInt(prompt("Enter the second number"));

if (
  whatAction === "Add" ||
  whatAction === "Diff" ||
  whatAction === "Mult" ||
  whatAction === "Div" ||
  whatAction === "Sqrt" ||
  whatAction === "Sin" ||
  whatAction === "Cos"
) {
  let result;
  if (whatAction === "Add") result = firstNumber + secondNumber;
  if (whatAction === "Diff") result = firstNumber - secondNumber;
  if (whatAction === "Mult") result = firstNumber * secondNumber;
  if (whatAction === "Div") result = firstNumber / secondNumber;
  if (whatAction === "Sqrt") result = Math.sqrt(firstNumber);
  if (whatAction === "Sin") result = Math.sin(firstNumber);
  if (whatAction === "Cos") {
    result = Math.cos(firstNumber);
  }
  alert(
    `Result of ${whatAction} ${firstNumber} and ${secondNumber} is ${result}`
  );
  alert("Good by, see you later.");
}
if (action === null || action === "") {
  alert("Good bye, see you later.");
}
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  alert("This is bad digit, good by");
}
