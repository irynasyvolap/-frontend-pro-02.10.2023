"use strict";

alert("Welcome to calculator!");

const whatAction = prompt(
  "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
);

if (whatAction === null) {
  alert("Good by, see you later.");
} else {
  let firstNumber = parseFloat(prompt("Enter first number"));
  let secondNumber;

  if (isNaN(firstNumber)) {
    alert("This is a bad digit, good by.");
  } else {
    if (whatAction === "Sqrt" || whatAction === "Sin" || whatAction === "Cos") {
      secondNumber = null;
    } else {
      secondNumber = parseFloat(prompt("Enter second number"));

      if (isNaN(secondNumber)) {
        alert("This is a bad digit, good by.");
      }
    }
    if (whatAction === "Add") {
      alert(
        `Sum of ${firstNumber} and ${secondNumber} is ${
          firstNumber + secondNumber
        }`
      );
    } else if (whatAction === "Diff") {
      alert(
        `Difference between ${firstNumber} and ${secondNumber} is ${
          firstNumber - secondNumber
        }`
      );
    } else if (whatAction === "Mult") {
      alert(
        `Product of ${firstNumber} and ${secondNumber} is ${
          firstNumber * secondNumber
        }`
      );
    } else if (whatAction === "Div") {
      if (secondNumber === 0) {
        alert("Division by zero is not allowed, good by.");
      } else {
        alert(
          `Division of ${firstNumber} by ${secondNumber} is ${
            firstNumber / secondNumber
          }`
        );
      }
    } else if (whatAction === "Sqrt") {
      if (firstNumber < 0) {
        alert("Square root of a negative number is not allowed, good by.");
      } else {
        alert(`Square root of ${firstNumber} is ${Math.sqrt(firstNumber)}`);
      }
    } else if (whatAction === "Sin") {
      alert(`Sine of ${firstNumber} is ${Math.sin(firstNumber)}`);
    } else if (whatAction === "Cos") {
      alert(`Cosine of ${firstNumber} is ${Math.cos(firstNumber)}`);
    } else {
      alert("Good by, see you later.");
    }
  }
}
