"use strict";
const outputArea = document.getElementById("output");
class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}
class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (typeof this.distance !== "number" || this.distance < 0) {
      throw new Error("Invalid trip distance");
    }
    const baseFare = 5;
    const perKmRate = 10;
    return baseFare + this.distance * perKmRate;
  }
}

const user = new User("Akash", 4.8);
const driver = new Driver("Ravi", 4.9, "Sedan");

try {
  const trip1 = new Trip("Airport", "Hotel", 10);
  outputArea.textContent += `Fare for trip: $${trip1.calculateFare()}\n`;

  const trip2 = new Trip("Mall", "Home", -5);
  outputArea.textContent += `Fare for trip: $${trip2.calculateFare()}\n`;
} catch (error) {
  outputArea.textContent += `Error: ${error.message}\n`;
}
