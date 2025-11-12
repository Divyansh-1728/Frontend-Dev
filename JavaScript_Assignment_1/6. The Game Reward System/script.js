function calculateRewards() {
    let level = parseInt(document.getElementById('level').value);
    let performanceScore = parseInt(document.getElementById('performanceScore').value);
    let missionsCompleted = document.getElementById('missionsCompleted').checked;

    if (isNaN(level) || level < 1) {
        alert("Please enter a valid level (>= 1).");
        return;
    }
    if (isNaN(performanceScore) || performanceScore < 0) {
        alert("Please enter a valid non-negative performance score.");
        return;
    }

    // Calculate base coins
    let coins = (level * 50) + (performanceScore * 10);

    // Double coins if all missions completed
    if (missionsCompleted) {
        coins *= 2;
    }

    // Determine rank
    let rank = coins > 1000 ? "Elite" : "Regular";

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 
        `Player Level: ${level}\n` +
        `Performance Score: ${performanceScore}\n` +
        `Missions Completed: ${missionsCompleted ? "Yes" : "No"}\n` +
        `Coins Earned: ${coins}\n` +
        `Rank: ${rank}`;
}
