function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function generateCoupon() {
    const couponNumber = generateRandomNumber(1, 100);
    let message = `Coupon Number: ${couponNumber}\n`;

    if (couponNumber <= 30) {
        message += "You won a 10% discount";
    } else if (couponNumber <= 60) {
        message += "You won a 20% discount";
    } else if (couponNumber <= 90) {
        message += "You won a 30% discount";
    } else {
        message += "You won a 50% Mega Offer!";
    }

    if (isPrime(couponNumber)) {
        message += "\nPrime number bonus applied";
    }

    document.getElementById('result').textContent = message;
}
