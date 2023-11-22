"use strict";

alert("Welcome to calculator!");

let whatAction = true;
const history = [];

function sum(a, b) {
  return a + b;
}

function diff(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function showNotification(type, message) {
  alert(`${type.toUpperCase()}: ${message}`);
}

function getUserNumber(promptMessage) {
  let number;

  do {
    const userChose = prompt(promptMessage, 0);
    if (userChose === null) {
      whatAction = false;
      showNotification("info", "Goodbye, see you later.");
      break;
    }

    if (userChose === "" || isNaN(parseFloat(userChose))) {
      showNotification(
        "error",
        "This is a bad digit, please enter a valid number"
      );
      continue;
    }

    number = parseFloat(userChose);
  } while (!Number.isInteger(number));

  return number;
}

function performOperation(operator, a, b) {
  let result;

  switch (operator) {
    case "add":
      result = sum(a, b);
      break;
    case "diff":
      result = diff(a, b);
      break;
    case "mult":
      result = mult(a, b);
      break;
    case "div":
      result = div(a, b);
      break;
    default:
      showNotification("error", "Something went wrong");
      break;
  }

  return result;
}

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
        const firstNumber = getUserNumber("Enter first number");
        const secondNumber = getUserNumber("Enter second number");

        const result = performOperation(
          normalizeOperation,
          firstNumber,
          secondNumber
        );

        const operationString = `${
          normalizeOperation.charAt(0).toUpperCase() +
          normalizeOperation.slice(1)
        }: ${firstNumber} ${
          normalizeOperation === "div" ? "÷" : normalizeOperation
        } ${secondNumber} = ${result}`;
        history.push(operationString);

        showNotification("info", operationString);

        whatAction = confirm("Do you want to continue working with me?");
        if (!whatAction) {
          showNotification("info", "Goodbye, see you later.");
        }
        break;
      }
      case "sqrt":
      case "sin":
      case "cos": {
        const number = getUserNumber(`Enter number for ${normalizeOperation}`);

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
            showNotification("error", "Something went wrong");
            break;
        }

        const operationString = `${
          normalizeOperation.charAt(0).toUpperCase() +
          normalizeOperation.slice(1)
        } of ${number} is ${result}`;
        history.push(operationString);

        showNotification("info", operationString);

        whatAction = confirm("Do you want to continue working with me?");
        if (!whatAction) {
          showNotification("info", "Goodbye, see you later.");
        }
        break;
      }
      case "history": {
        if (history.length === 0) {
          showNotification("info", "No operations in history.");
        } else {
          let historyString = "Your operation history:\n\n";
          history.forEach((op) => {
            historyString += op + "\n";
          });
          showNotification("info", historyString);
        }
        break;
      }
      default: {
        showNotification(
          "error",
          "I don't recognize your operation. Please choose a valid operation."
        );
        break;
      }
    }
  } else {
    whatAction = false;
    showNotification("info", "Goodbye, see you later.");
  }
} while (whatAction);
