function analyzePerformance() {
    // Generate array of 8 random scores between 30 and 100
    const scores = Array.from({length: 8}, () => Math.floor(Math.random() * 71) + 30);

    // Highest and lowest score
    const highest = Math.max(...scores);
    const lowest = Math.min(...scores);

    // Average score using reduce
    const sum = scores.reduce((acc, val) => acc + val, 0);
    const average = sum / scores.length;

    // Number of students who passed (score >= 50) using filter
    const passedStudents = scores.filter(score => score >= 50).length;

    // Create formatted summary using template literals
    const summary = `
Scores: ${scores.join(', ')}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Number of Students Passed (>=50): ${passedStudents}
`;

    document.getElementById('result').textContent = summary;
}
