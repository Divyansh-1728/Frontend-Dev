function calculateBonus() {
    const baseSalaryInput = document.getElementById('baseSalary').value;
    const ratingInput = document.getElementById('performanceRating').value;
    const experienceInput = document.getElementById('experienceYears').value;

    let baseSalary = parseFloat(baseSalaryInput);
    let rating = parseInt(ratingInput);
    let experience = parseInt(experienceInput);

    // Input validations
    if (isNaN(baseSalary) || baseSalary < 0) {
        alert("Please enter a valid base salary.");
        return;
    }
    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please enter a performance rating between 1 and 5.");
        return;
    }
    if (isNaN(experience) || experience < 0) {
        alert("Please enter valid years of experience.");
        return;
    }

    // Bonus percentage based on rating
    let bonusPercent = 0;
    if (rating === 5) bonusPercent = 20;
    else if (rating === 4) bonusPercent = 15;
    else if (rating === 3) bonusPercent = 10;
    else bonusPercent = 0;

    // Add extra 5% for experience > 5 years
    if (experience > 5) {
        bonusPercent += 5;
    }

    // Calculate bonus
    let bonus = (baseSalary * bonusPercent) / 100;

    // Cap bonus at ₹25,000 if base salary > ₹1,00,000
    let cappedBonus = bonus;
    if (baseSalary > 100000 && bonus > 25000) {
        cappedBonus = 25000;
    }

    let totalSalary = baseSalary + cappedBonus;

    let resultText = 
        `Calculated Bonus: ₹${bonus.toFixed(2)}\n` +
        `Capped Final Bonus: ₹${cappedBonus.toFixed(2)}\n` +
        `Total Salary After Bonus: ₹${totalSalary.toFixed(2)}`;

    document.getElementById('result').textContent = resultText;
}
