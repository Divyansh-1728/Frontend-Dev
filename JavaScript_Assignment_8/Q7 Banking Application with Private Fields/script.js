"use strict";

const outputArea = document.getElementById("output");

class BankAccount {
  #balance = 0; // private

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > this.#balance) throw new Error("Insufficient balance");
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);

try {
  account.deposit(50);
  outputArea.textContent += `Balance after deposit: $${account.getBalance()}\n`;
  account.withdraw(200); // Trigger error
  outputArea.textContent += `Balance after withdrawal: $${account.getBalance()}\n`;
} catch (error) {
  outputArea.textContent += `Error: ${error.message}\n`;
}
