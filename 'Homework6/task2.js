"use strict";

const distanceKm = Number(prompt("Enter the distance in kilometers:", 0));
const distanceFeet = Number(prompt("Enter the distance in feet:", 0));

const distanceMeters = distanceFeet * 0.305;

// Порівнюємо відстані
if (distanceKm > distanceMeters) {
  console.log(`The distance in kilometers (${distanceKm}) is bigger.`);
} else if (distanceMeters > distanceKm) {
  console.log(`The distance in feet (${distanceMeters} ) is bigger.`);
} else {
  console.log("The distances are the same.");
}
