function calculateInterest() {
    let accountType = document.getElementById('accountType').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let years = parseInt(document.getElementById('years').value);

    // Set base interest rate
    let rate = accountType === "savings" ? 4 : 6.5;

    // Bonus interest for large deposits
    if (amount > 100000) {
        rate += 1;
    }

    // Calculate compound interest
    let total = amount * Math.pow((1 + rate / 100), years);

    // Show result, rounded to 2 decimals
    document.getElementById('result').innerHTML =
        `<strong>Final Balance:</strong> ₹${total.toFixed(2)}<br>
         <strong>Annual Rate Used:</strong> ${rate}%`;
}
