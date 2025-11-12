function showMathUtils() {
    const x = 16.75;
    const rounded = Math.round(x);
    const sqrtVal = Math.sqrt(x);
    const power = Math.pow(x, 3);
    const randomNum = Math.floor(Math.random() * 41) + 10;

    const result = `
Number (x): ${x}
Rounded value (Math.round): ${rounded}
Square root (Math.sqrt): ${sqrtVal.toFixed(4)}
Power (x^3) (Math.pow): ${power.toFixed(4)}
Random number between 10 and 50: ${randomNum}
`;

    document.getElementById('result').textContent = result;
}
