function calculateTicket() {
    let showType = document.getElementById('showType').value;
    let userType = document.getElementById('userType').value;
    let age = parseInt(document.getElementById('age').value);
    let tickets = parseInt(document.getElementById('tickets').value);

    // Base price per ticket
    let basePrice = showType === "morning" ? 120 : 180;
    let totalBase = basePrice * tickets;

    // Discount logic
    let discount = 0;
    if (userType === "student") {
        discount = 0.10;
    } else if (userType === "senior" || age > 60) {
        discount = 0.20;
    }

    let discountedTotal = totalBase * (1 - discount);

    // Service fee for more than 3 tickets
    let serviceFee = tickets > 3 ? 50 : 0;

    let finalAmount = discountedTotal + serviceFee;

    document.getElementById('result').innerHTML =
        `<strong>Base Price:</strong> ₹${totalBase}<br>
         <strong>Discounted Total:</strong> ₹${discountedTotal.toFixed(2)}<br>
         <strong>Final Amount:</strong> ₹${finalAmount.toFixed(2)}`;
}
