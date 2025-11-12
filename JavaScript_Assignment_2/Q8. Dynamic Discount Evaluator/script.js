const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

function evaluateDiscounts() {
    // Apply individual item discounts
    const discountedPrices = cart.map(product => {
        let discountRate = 0;
        if (product.category === "electronics") discountRate = 0.10;
        else if (product.category === "fashion") discountRate = 0.05;
        // no discount for others currently

        const discountedPrice = product.price * (1 - discountRate);
        return { ...product, discountedPrice };
    });

    // Calculate total with item discounts
    const totalAfterItemDiscounts = discountedPrices.reduce((acc, product) => acc + product.discountedPrice, 0);

    // Apply extra 5% discount if total > 50000
    let finalTotal = totalAfterItemDiscounts;
    let extraDiscountApplied = false;
    if (finalTotal > 50000) {
        finalTotal *= 0.95; // 5% extra off
        extraDiscountApplied = true;
    }

    // Format output
    let output = "Cart Items with Discounts:\n";
    discountedPrices.forEach(p => {
        output += `${p.item} (${p.category}): Original ₹${p.price.toFixed(2)} → Discounted ₹${p.discountedPrice.toFixed(2)}\n`;
    });
    output += `\nTotal after item discounts: ₹${totalAfterItemDiscounts.toFixed(2)}\n`;
    if (extraDiscountApplied) {
        output += "Extra 5% overall discount applied due to high total.\n";
    }
    output += `Final Total: ₹${finalTotal.toFixed(2)}`;

    document.getElementById('result').textContent = output;
}
