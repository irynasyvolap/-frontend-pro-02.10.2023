"use strict";

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

function Apartment() {
  this.residents = [];
}

Apartment.prototype.addResident = function (person) {
  if (person instanceof Person) {
    this.residents.push(person);
  } else {
    console.log("Invalid object Person");
  }
};

function Building(maxApartments) {
  this.apartments = [];
  this.maxApartments = maxApartments;
}

Building.prototype.addApartment = function (apartment) {
  if (apartment instanceof Apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("The maximum number of apartments has already been reached!");
    }
  } else {
    console.log("Invalid object Apartment");
  }
};

const person1 = new Person("Andrey", "man");
const person2 = new Person("Iryna", "woman");
const person3 = new Person("Dmytro", "man");
const person4 = new Person("Angelina", "woman");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);
apartment2.addResident(person4);

const building = new Building(2);

building.addApartment(apartment1);
building.addApartment(apartment2);

console.log("Residents of the building:");
building.apartments.forEach((apartment, i) => {
  console.log(`Apartment ${i + 1}:`);
  apartment.residents.forEach((resident) => {
    console.log(`- ${resident.name}, ${resident.gender}`);
  });
});
