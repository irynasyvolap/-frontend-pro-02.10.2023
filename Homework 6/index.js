"use strict";

alert("Welcome to calculator!");

const whatAction = prompt(
  "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos"
);

if (whatAction === null) {
  alert("Good by, see you later.");
} else {
  const firstNumber = parseFloat(prompt("Enter number"));
  const secondNumber =
    whatAction === "Sqrt" || whatAction === "Sin" || whatAction === "Cos"
      ? null
      : parseFloat(prompt("Enter number"));

  switch (whatAction) {
    case "Add":
      alert(
        `Sum of ${firstNumber} and ${secondNumber} is ${
          firstNumber + secondNumber
        }`
      );
      break;
    case "Diff":
      alert(
        `Difference between ${firstNumber} and ${secondNumber} is ${
          firstNumber - secondNumber
        }`
      );
      break;
    case "Mult":
      alert(
        `Product of ${firstNumber} and ${secondNumber} is ${
          firstNumber * secondNumber
        }`
      );
      break;
    case "Div":
      const result =
        secondNumber === 0
          ? "Division by zero is not allowed"
          : `Division of ${firstNumber} by ${secondNumber} is ${
              firstNumber / secondNumber
            }`;
      alert(result);
      break;
    case "Sqrt":
      const sqrtResult =
        firstNumber < 0
          ? "Square root of a negative number is not allowed"
          : `Square root of ${firstNumber} is ${Math.sqrt(firstNumber)}`;
      alert(sqrtResult);
      break;
    case "Sin":
      alert(`Sine of ${firstNumber} is ${Math.sin(firstNumber)}`);
      break;
    case "Cos":
      alert(`Cosine of ${firstNumber} is ${Math.cos(firstNumber)}`);
      break;
    default:
      alert("Good by, see you later.");
  }
}
