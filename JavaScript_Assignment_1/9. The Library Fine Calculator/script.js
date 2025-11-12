function calculateFine() {
    const delaysInput = document.getElementById('delays').value.trim();
    if (!delaysInput) {
        alert("Please enter delays for late books.");
        return;
    }

    // Parse delays into array of integers
    let delayDays = delaysInput.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);

    if (delayDays.length === 0) {
        alert("Please enter valid positive numbers separated by commas.");
        return;
    }

    let totalFine = 0;
    let fineDetails = [];

    // Calculate fine per book with conditions
    for (let i = 0; i < delayDays.length; i++) {
        let days = delayDays[i];
        let fine = 0;

        if (days >= 1 && days <= 5) {
            fine = days * 10;
        } else if (days >= 6 && days <= 10) {
            fine = days * 20;
        } else if (days >= 11) {
            fine = days * 50;
        }

        totalFine += fine;
        fineDetails.push(`Book ${i + 1}: ${days} day(s) late → ₹${fine}`);
    }

    // Additional penalty if more than 3 delayed books
    let penalty = 0;
    if (delayDays.length > 3) {
        penalty = 200;
        totalFine += penalty;
    }

    let summary = fineDetails.join('\n') + '\n';
    summary += `\nNumber of delayed books: ${delayDays.length}`;
    if (penalty) {
        summary += `\nAdditional penalty: ₹${penalty}`;
    }
    summary += `\n\nTotal Fine: ₹${totalFine}`;

    document.getElementById('result').textContent = summary;
}
