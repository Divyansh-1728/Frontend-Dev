function processTitle() {
    let product = document.getElementById('productName').value;

    // Trim extra spaces
    product = product.trim();

    // Convert to lowercase
    product = product.toLowerCase();

    // Capitalize first letter of each word
    let words = product.split(' ');
    words = words.map(word => {
        if (word.length === 0) return "";
        return word[0].toUpperCase() + word.slice(1);
    });

    let cleanedTitle = words.join(' ');

    // Replace "Pro" with "Pro Edition"
    cleanedTitle = cleanedTitle.replace('Pro', 'Pro Edition');

    // Get length of cleaned title
    let length = cleanedTitle.length;

    // Display results
    let result = `Cleaned Title: ${cleanedTitle}\nLength: ${length}`;
    document.getElementById('result').textContent = result;
}
