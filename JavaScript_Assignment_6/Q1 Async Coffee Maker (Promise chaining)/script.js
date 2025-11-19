"use strict";

const outputArea = document.getElementById("output");

// Simulate async boiling water (1-2 seconds), with random failure
function boilWater() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Failed to boil water!");
      else {
        outputArea.textContent += "Water boiled.\n";
        resolve("Water boiled");
      }
    }, delay);
  });
}

// Async brewing coffee
function brewCoffee() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Brewing failed!");
      else {
        outputArea.textContent += "Coffee brewed.\n";
        resolve("Coffee brewed");
      }
    }, delay);
  });
}

// Async pouring coffee
function pourCoffee() {
  return new Promise((resolve, reject) => {
    const delay = 1000 + Math.random() * 1000;
    setTimeout(() => {
      if (Math.random() < 0.15) reject("Pouring failed!");
      else {
        outputArea.textContent += "Coffee poured into cup.\n";
        resolve("Coffee poured");
      }
    }, delay);
  });
}

boilWater()
  .then(() => brewCoffee())
  .then(() => pourCoffee())
  .then(() => {
    outputArea.textContent += "Coffee ready for the team!";
  })
  .catch(error => {
    outputArea.textContent += `Error: ${error}\nProcess aborted.`;
  });
