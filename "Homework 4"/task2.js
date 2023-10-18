"use strict";

const distanceKm = parseInt(prompt("Enter the distance in kilometers:", 0));
const distanceFeet = parseInt(prompt("Enter the distance in feet:", 0));

const distanceMeters = distanceFeet * 0.000305;

if (distanceMeters > distanceFeet) {
  console.log(
    `Distance ${distanceKm}km is bigger then distance ${distanceFeet}ft`
  );
}

if (distanceMeters < distanceFeet) {
  console.log(
    `Distance ${distanceKm}km is smaller then distance ${distanceFeet}ft`
  );
}
