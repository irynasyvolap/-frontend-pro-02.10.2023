"use strict";

const smileys = ["👍", "👎", "😍", "😂", "😓"];

const counters = Array(smileys.length).fill(0);

function render() {
  const container = document.getElementById("smileyContainer");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  smileys.forEach((smiley, index) => {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = smiley;
    span.classList.add("smiley");
    span.addEventListener("click", () => vote(index));
    div.appendChild(span);

    const countSpan = document.createElement("span");
    countSpan.textContent = ` - ${counters[index]} голосів`;
    div.appendChild(countSpan);

    container.appendChild(div);
  });
}

function vote(index) {
  counters[index]++;
  render();
}

document.addEventListener("DOMContentLoaded", render);
