"use strict";

let table = document.getElementById("myTable");

for (let i = 0; i <= 10; i++) {
  let row = table.insertRow();
  for (let j = 0; j <= 10; j++) {
    let cell = row.insertCell();
    if (i === 0 && j > 0) {
      cell.innerHTML = j;
    } else if (j === 0 && i > 0) {
      cell.innerHTML = i;
    } else if (i > 0 && j > 0) {
      let result = Math.round(i * j);
      cell.innerHTML = result;
    }
  }
}
