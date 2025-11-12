function analyzeNumbers() {
    let results = [];
    for (let num = 1; num <= 30; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            results.push("FizzBuzz");
        } else if (num % 2 === 0) {
            results.push("Even");
        } else {
            results.push("Odd");
        }
    }

    document.getElementById('result').textContent = results.join(", ");
}
