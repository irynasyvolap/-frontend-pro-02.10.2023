"use strict";

let currentIndex = 0;

const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
];

const currentImage = document.getElementById("currentImage");

function showImage(index) {
  currentImage.src = "img/" + images[index];
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    showImage(currentIndex);
  }

  checkButtonVisibility();
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showImage(currentIndex);
  }

  checkButtonVisibility();
}

function checkButtonVisibility() {
  const prevButton = document.querySelector("#navigation button:nth-child(1)");
  const nextButton = document.querySelector("#navigation button:nth-child(2)");

  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline-block";
  }

  if (currentIndex === images.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

showImage(currentIndex);

checkButtonVisibility();
