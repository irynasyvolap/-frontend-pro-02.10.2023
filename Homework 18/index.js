"use strict";

class Hamburger {
  sizeSmall = { price: 50, calories: 20 };
  sizeLarge = { price: 100, calories: 40 };
  stuffingCheese = { price: 10, calories: 20 };
  stuffingSalad = { price: 20, calories: 5 };
  stuffingPotato = { price: 15, calories: 10 };
  toppingSpice = { price: 15, calories: 0 };
  toppingMayonnaise = { price: 20, calories: 5 };

  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let totalCalories = this.size.calories + this.stuffing.calories;
    for (let topping of this.toppings) {
      totalCalories += topping.calories;
    }
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price + this.stuffing.price;
    for (let topping of this.toppings) {
      totalPrice += topping.price;
    }
    return totalPrice;
  }
}

let hamburger = new Hamburger(
  new Hamburger().sizeLarge,
  new Hamburger().stuffingSalad
);

hamburger.addTopping(new Hamburger().toppingMayonnaise);

console.log("Calories: " + hamburger.calculateCalories());

console.log("Price: " + hamburger.calculatePrice());

hamburger.addTopping(new Hamburger().toppingSpice);

console.log("Price with spice: " + hamburger.calculatePrice());
