const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

function evaluateEmployees() {
    let resultText = '';

    for (let i = 0; i < departments.length; i++) {
        const [department, score] = departments[i];
        let performance = '';

        if (score >= 90) {
            performance = "Excellent";
        } else if (score >= 75 && score <= 89) {
            performance = "Good";
        } else if (score >= 60 && score <= 74) {
            performance = "Average";
        } else {
            performance = "Needs Improvement";
        }

        resultText += `${department} Department: ${performance} (Score: ${score})\n`;
    }

    document.getElementById('result').textContent = resultText;
}
