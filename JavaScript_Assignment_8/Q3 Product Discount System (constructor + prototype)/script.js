"use strict";

const outputArea = document.getElementById("output");

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  return +(this.price * (1 - percent / 100)).toFixed(2);
};

const p1 = new Product("Shoes", 120);
const p2 = new Product("Bag", 80);
const p3 = new Product("Watch", 200);

outputArea.textContent += `Original prices:\n`;
[p1,p2,p3].forEach(p => {
  outputArea.textContent += `${p.name}: $${p.price}\n`;
});

outputArea.textContent += `\nDiscounted prices:\n`;
outputArea.textContent += `${p1.name} (10% off): $${p1.applyDiscount(10)}\n`;
outputArea.textContent += `${p2.name} (20% off): $${p2.applyDiscount(20)}\n`;
outputArea.textContent += `${p3.name} (30% off): $${p3.applyDiscount(30)}\n`;

