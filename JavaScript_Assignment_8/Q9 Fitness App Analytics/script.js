"use strict";

const outputArea = document.getElementById("output");

const workoutData = [
  { user: "A", steps: 8000, calories: 300 },
  { user: "B", steps: 12000, calories: 500 },
  { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
  constructor(data) {
    if (!data || data.length === 0) {
      throw new Error("Dataset is empty");
    }
    this.data = data;
  }

  getActiveUsers() {
    return this.data.filter(d => d.steps > 7000).map(d => d.user);
  }

  getAverageCalories() {
    const total = this.data.reduce((sum, d) => sum + d.calories, 0);
    return total / this.data.length;
  }

  getUserSummary() {
    return this.data.map(d => `User ${d.user} walked ${d.steps} steps and burned ${d.calories} calories.`);
  }
}

try {
  const analytics = new FitnessAnalytics(workoutData);

  outputArea.textContent += "Active Users: " + analytics.getActiveUsers().join(", ") + "\n";
  outputArea.textContent += "Average Calories Burned: " + analytics.getAverageCalories().toFixed(2) + "\n\n";
  outputArea.textContent += "User Summaries:\n" + analytics.getUserSummary().join("\n");
} catch (error) {
  outputArea.textContent = `Error: ${error.message}`;
}
