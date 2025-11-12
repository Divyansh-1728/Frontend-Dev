function calculateBill() {
    const baseCostInput = document.getElementById('baseCost').value;
    const diningIn = document.getElementById('diningIn').checked;

    let baseCost = parseFloat(baseCostInput);
    if (isNaN(baseCost) || baseCost < 0) {
        alert("Please enter a valid base food cost.");
        return;
    }

    const GST_RATE = 0.05; // 5%
    const SERVICE_TAX_RATE = diningIn ? 0.10 : 0.0; // 10% if dining in, else 0%

    const gstAmount = baseCost * GST_RATE;
    const serviceTaxAmount = baseCost * SERVICE_TAX_RATE;

    let totalBeforeTip = baseCost + gstAmount + serviceTaxAmount;

    let tipAmount = 0;
    if (totalBeforeTip > 2000) {
        tipAmount = baseCost * 0.08; // 8% tip on base cost
    }

    const finalTotal = totalBeforeTip + tipAmount;

    const resultText = 
        `Base Amount: ₹${baseCost.toFixed(2)}\n` +
        `GST (5%): ₹${gstAmount.toFixed(2)}\n` +
        `Service Tax (${(SERVICE_TAX_RATE * 100).toFixed(0)}%): ₹${serviceTaxAmount.toFixed(2)}\n` +
        `Tip: ₹${tipAmount.toFixed(2)}\n` +
        `Final Total: ₹${finalTotal.toFixed(2)}`;

    document.getElementById('result').textContent = resultText;
}
