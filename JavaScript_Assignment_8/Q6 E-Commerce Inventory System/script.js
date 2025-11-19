"use strict";
const outputArea = document.getElementById("output");
const products = [
  { id: 1, name: "Shoes", category: "Fashion", price: 120, stock: 15 },
  { id: 2, name: "Laptop", category: "Electronics", price: 1000, stock: 5 },
  { id: 3, name: "Keyboard", category: "Electronics", price: 40, stock: 0 },
  { id: 4, name: "Jeans", category: "Fashion", price: 70, stock: 12 },
  { id: 5, name: "Coffee Mug", category: "Kitchen", price: 15, stock: 8 },
];
function getLowStockProducts() {
  return products.filter(p => p.stock <= 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    group[p.category] = group[p.category] || [];
    group[p.category].push(p);
    return group;
  }, {});
}

outputArea.textContent += `Low Stock Products:\n${JSON.stringify(getLowStockProducts(), null, 2)}\n\n`;
outputArea.textContent += `Products Sorted by Price:\n${JSON.stringify(sortProductsByPrice(), null, 2)}\n\n`;
outputArea.textContent += `Total Inventory Value: $${calculateTotalInventoryValue()}\n\n`;
outputArea.textContent += `Products Grouped by Category:\n${JSON.stringify(groupByCategory(), null, 2)}\n\n`;
