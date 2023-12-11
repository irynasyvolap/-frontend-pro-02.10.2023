"use strict";

const imagePaths = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
];

function showRandomImage() {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  const selectedImagePath = imagePaths[randomIndex];
  const imageContainer = document.getElementById("image-container");
  imageContainer.innerHTML = `<img src="${selectedImagePath}" alt="Random Image">`;
}

function displayImages() {
  for (let i = 0; i < imagePaths.length; i++) {
    setTimeout(showRandomImage, i * 2000);
  }
}

document.addEventListener("DOMContentLoaded", displayImages);
