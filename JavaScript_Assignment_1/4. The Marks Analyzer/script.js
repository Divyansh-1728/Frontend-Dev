function analyzeMarks() {
    let marks = [];
    for (let i = 1; i <= 5; i++) {
        let mark = parseFloat(document.getElementById('mark' + i).value);
        if (isNaN(mark) || mark < 0 || mark > 100) {
            alert(`Please enter a valid mark (0-100) for Subject ${i}`);
            return;
        }
        marks.push(mark);
    }

    let total = 0;
    let failCount = 0;
    for (let mark of marks) {
        total += mark;
        if (mark < 40) failCount++;
    }

    let average = total / marks.length;
    let percentage = average; // since max per subject is 100

    let grade = "";
    if (average >= 90) grade = "A+";
    else if (average >= 75) grade = "A";
    else if (average >= 60) grade = "B";
    else if (average >= 40) grade = "C";
    else grade = "Fail";

    let status = (failCount >= 2) ? "Repeat Year" : "Pass";

    let resultText = "";
    resultText += `Marks: ${marks.join(", ")}\n`;
    resultText += `Average: ${average.toFixed(2)}\n`;
    resultText += `Percentage: ${percentage.toFixed(2)}%\n`;
    resultText += `Grade: ${grade}\n`;
    if (status === "Repeat Year") {
        resultText += `${status}`;
    }

    document.getElementById('result').textContent = resultText;
}
