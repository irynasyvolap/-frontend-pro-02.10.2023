"use strict";

class SuperMath {
  static OPERATION = ["+", "-", "/", "*", "%"];

  check(obj) {
    if (!obj || !obj.znak || !SuperMath.OPERATION.includes(obj.znak)) {
      console.warn("Invalid operator");
      this.input(obj);
      return;
    }

    if (
      confirm(
        `Do you want to work with this data: X: ${obj.X}, Y: ${obj.Y}, znak: ${obj.znak} ?`
      )
    ) {
      const result = this.calculate(obj);
      alert(result);
    } else {
      this.input(obj);
    }
  }

  input(obj) {
    obj.X = parseFloat(prompt("Please enter X"));
    if (Number.isNaN(obj.X)) {
      alert("This is bad digit");
      return;
    }

    obj.Y = parseFloat(prompt("Please enter Y"));
    if (Number.isNaN(obj.Y)) {
      alert("This is bad digit");
      return;
    }

    obj.znak = prompt(
      `Enter znak like this: ${SuperMath.OPERATION.join(", ")}`
    );
    if (!SuperMath.OPERATION.includes(obj.znak)) {
      alert("Something went wrong!");
      return;
    }

    this.check(obj);
  }

  calculate(obj) {
    switch (obj.znak) {
      case "+":
        return obj.X + obj.Y;
      case "-":
        return obj.X - obj.Y;
      case "*":
        return obj.X * obj.Y;
      case "/":
        return obj.X / obj.Y;
      case "%":
        return obj.X % obj.Y;
      default:
        console.warn("Something went wrong!");
        break;
    }
  }
}

const superMath = new SuperMath();
superMath.check({ X: 12, Y: 3, znak: "/" });
