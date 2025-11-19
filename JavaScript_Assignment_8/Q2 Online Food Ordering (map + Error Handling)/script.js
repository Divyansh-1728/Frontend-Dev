"use strict";

const outputArea = document.getElementById("output");

const menu = {
  "Burger": 5,
  "Fries": 3,
  "Pizza": 8,
  "Salad": 4,
};

function calculateBill(orderItems) {
  // Map orderItems prices, throwing if invalid item found
  const prices = orderItems.map(item => {
    if (!(item in menu)) throw new Error(`Invalid item ordered: ${item}`);
    return menu[item];
  });
  // Reduce prices to sum total
  const total = prices.reduce((sum, price) => sum + price, 0);
  return total;
}

try {
  const order1 = ["Burger", "Fries"];
  const total1 = calculateBill(order1);
  outputArea.textContent += `Order: ${order1.join(", ")} => Total: $${total1}\n`;

  const order2 = ["Pizza", "Salad", "Soda"];
  const total2 = calculateBill(order2);
  outputArea.textContent += `Order: ${order2.join(", ")} => Total: $${total2}\n`;
} catch (err) {
  outputArea.textContent += `Error: ${err.message}\n`;
}
