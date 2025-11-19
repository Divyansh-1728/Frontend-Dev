"use strict";

const outputArea = document.getElementById("output");

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    if(this.marks.length === 0) return 0;
    const sum = this.marks.reduce((acc, curr) => acc + curr, 0);
    return sum / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const students = [
  new Student("Alice", [98, 85, 91]),
  new Student("Bob", [76, 70, 82]),
  new Student("Charlie", [45, 50, 49]),
];

students.forEach(({ name, marks }) => {
  const student = new Student(name, marks);
  outputArea.textContent += `${student.name} - Avg: ${student.calculateAverage().toFixed(2)}, Grade: ${student.getGrade()}\n`;
});
