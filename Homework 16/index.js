"use strict";

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

class Car {
  constructor(brand, model, year, licensePlate, owner) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = this.validateOwner(owner) ? owner : null;
  }

  validateOwner(owner) {
    if (owner instanceof Human && owner.age >= 18) {
      return true;
    } else {
      console.log(
        `It is not possible to assign an owner. The owner must be an adult.`
      );
      return false;
    }
  }

  displayInfo() {
    console.log(
      `Car: ${this.brand} ${this.model}, Year of manufacture of the car: ${this.year}, License plate: ${this.licensePlate}`
    );
    if (this.owner) {
      console.log(`Owner:`);
      this.owner.displayInfo();
    } else {
      console.log(`The owner of the car is absent`);
    }
  }
}

const person1 = new Human("Andriy", 35);
const person2 = new Human("Iryna", 34);
const person3 = new Human("Mykyta", 4);
const person4 = new Human("Angelina", 28);
const person5 = new Human("Dmytro", 40);

const car1 = new Car("Toyota", "Rav4", 2022, "AB1111AB", person1);
const car2 = new Car("Volkswagen", "Polo", 2019, "AB1212AB", person2);
const car3 = new Car("Toyota", "Auris", 2021, "AB2222AB", person3);
const car4 = new Car("Nissan", "Juke", 2015, "AB3333AB", person4);
const car5 = new Car("Chevrolet", "Epica", 2018, "AX0022AB", person5);

car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
car4.displayInfo();
car5.displayInfo();
console.log(person3);
console.log(car3);

