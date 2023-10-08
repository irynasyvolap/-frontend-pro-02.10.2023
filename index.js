"use strict";

let userHours;
let secondsResult;

userHours = prompt("Введіть кількість годин:");
secondsResult = userHours * 3600;

alert(
  "У" + " " + userHours + " " + "годинах" + " " + secondsResult + " секунд!"
);
