"use strict";

alert("Welcome to calculator!");

let whatAction = true;
const history = [];

calculator: do {
  const operation = prompt(
    "What action you want to do? Add, Diff, Mult, Div, Sqrt, Sin, Cos, History",
    "Add"
  );

  if (operation) {
    const normalizeOperation = operation.toLowerCase();

    switch (normalizeOperation) {
      case "add":
      case "diff":
      case "mult":
      case "div": {
        let firstNumber;
        let secondNumber;

        do {
          const userChose = prompt("Enter first number", 0);
          if (userChose === null) {
            whatAction = false;
            alert("Goodbye, see you later.");
            break calculator;
          }

          if (userChose === "" || isNaN(parseFloat(userChose))) {
            alert("This is a bad digit, please enter a valid number");
            continue;
          }

          firstNumber = parseFloat(userChose);
        } while (!Number.isInteger(firstNumber));

        do {
          const userChose = prompt("Enter second number", 0);
          if (userChose === null) {
            whatAction = false;
            alert("Goodbye, see you later.");
            break calculator;
          }

          if (userChose === "" || isNaN(parseFloat(userChose))) {
            alert("This is a bad digit, please enter a valid number");
            continue;
          }

          secondNumber = parseFloat(userChose);
        } while (!Number.isInteger(secondNumber));

        let result;

        switch (normalizeOperation) {
          case "add":
            result = firstNumber + secondNumber;
            break;
          case "diff":
            result = firstNumber - secondNumber;
            break;
          case "mult":
            result = firstNumber * secondNumber;
            break;
          case "div":
            result = firstNumber / secondNumber;
            break;
          default:
            alert("Something went wrong");
            break;
        }

        const operationString = `${
          normalizeOperation.charAt(0).toUpperCase() +
          normalizeOperation.slice(1)
        }: ${firstNumber} ${
          normalizeOperation === "div" ? "÷" : normalizeOperation
        } ${secondNumber} = ${result}`;
        history.push(operationString);

        alert(operationString);

        whatAction = confirm("Do you want to continue working with me?");
        if (!whatAction) {
          alert("Goodbye, see you later.");
        }
        break;
      }
      case "sqrt":
      case "sin":
      case "cos": {
        let number;

        do {
          const userChose = prompt("Enter number", 0);
          if (userChose === null) {
            whatAction = false;
            alert("Goodbye, see you later.");
            break calculator;
          }

          if (userChose === "" || isNaN(parseFloat(userChose))) {
            alert("This is a bad digit, please enter a valid number");
            continue;
          }

          number = parseFloat(userChose);
        } while (!Number.isInteger(number));

        let result;

        switch (normalizeOperation) {
          case "sqrt":
            result =
              number >= 0 ? Math.sqrt(number) : "Number must be positive";
            break;
          case "sin":
            result = Math.sin(number);
            break;
          case "cos":
            result = Math.cos(number);
            break;
          default:
            alert("Something went wrong");
            break;
        }

        const operationString = `${
          normalizeOperation.charAt(0).toUpperCase() +
          normalizeOperation.slice(1)
        } of ${number} is ${result}`;
        history.push(operationString);

        alert(operationString);

        whatAction = confirm("Do you want to continue working with me?");
        if (!whatAction) {
          alert("Goodbye, see you later.");
        }
        break;
      }
      case "history": {
        if (history.length === 0) {
          alert("No operations in history.");
        } else {
          let historyString = "Your operation history:\n\n";
          history.forEach((op) => {
            historyString += op + "\n";
          });
          alert(historyString);
        }
        break;
      }
      default: {
        alert(
          "I don't recognize your operation. Please choose a valid operation."
        );
        break;
      }
    }
  } else {
    whatAction = false;
    alert("Goodbye, see you later.");
  }
} while (whatAction);
