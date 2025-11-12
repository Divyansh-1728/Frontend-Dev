function estimateDelivery() {
    let orderAmount = parseFloat(document.getElementById('orderAmount').value);
    let isPremium = document.getElementById('isPremium').checked;
    let isRemote = document.getElementById('isRemote').checked;

    let deliveryFee = 0;
    let deliveryTime = 3;

    if (orderAmount < 500 && !isPremium) {
        deliveryFee = 50;
    }
    if (isRemote) {
        deliveryTime += 2;
    }
    let totalCost = orderAmount + deliveryFee;

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <strong>Total Cost:</strong> ₹${totalCost}<br>
        <strong>Estimated Delivery Time:</strong> ${deliveryTime} days
    `;
}
