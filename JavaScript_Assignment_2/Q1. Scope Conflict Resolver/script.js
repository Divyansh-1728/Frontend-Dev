// Global variable
let bonus = 5000;

function calculateSalary() {
    // Get isPermanent boolean from the select input
    let isPermanent = document.getElementById('isPermanent').value === 'true';

    // Local variable salary
    let salary = 40000;

    // Calculate total salary conditionally adding bonus
    let totalSalary = salary;
    if (isPermanent) {
        totalSalary += bonus;
    }

    let resultText = `isPermanent: ${isPermanent}\n`;
    resultText += `Salary: ₹${salary}\n`;
    resultText += `Bonus (Global Variable): ₹${bonus}\n`;
    resultText += `Total Salary: ₹${totalSalary}\n\n`;
    resultText += `Global bonus variable remains unchanged: ₹${bonus}`;

    document.getElementById('result').textContent = resultText;
}
