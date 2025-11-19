"use strict";

const outputArea = document.getElementById("output");

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    outputArea.textContent += `${this.name} is working in ${this.department}\n`;
  }
}

class Manager extends Employee {
  work() {
    outputArea.textContent += `${this.name} is managing the ${this.department} department\n`;
  }
}

const e1 = new Employee("Amit", "IT");
const m1 = new Manager("Sara", "HR");

e1.work();
m1.work();

// Runtime polymorphism: Manager overrides work() method
