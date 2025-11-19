"use strict";

const outputArea = document.getElementById("output");

class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function() {
  return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: $${this.price}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, convenienceFee) {
    super(movieName, seatNo, price);
    this.convenienceFee = convenienceFee;
  }

  getTotalAmount() {
    return this.price + this.convenienceFee;
  }
}

const ticket1 = new OnlineTicket("Inception", "A1", 12, 2);
const ticket2 = new OnlineTicket("Interstellar", "B2", 15, 3);

outputArea.textContent += ticket1.printTicket() + `, Total: $${ticket1.getTotalAmount()}\n`;
outputArea.textContent += ticket2.printTicket() + `, Total: $${ticket2.getTotalAmount()}\n`;
