"use strict";

function sumClosure() {
  let total = 0;

  return function (x) {
    total += x;
    return total;
  };
}

const sum = sumClosure();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
