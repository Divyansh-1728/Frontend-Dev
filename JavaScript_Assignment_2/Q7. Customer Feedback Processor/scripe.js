function analyzeFeedback() {
    const feedback = document.getElementById('feedback').value.trim();

    // Count words using split()
    const wordCount = feedback.split(/\s+/).filter(word => word.length > 0).length;

    // Check if feedback includes "bad" or "poor" (case insensitive)
    const lowerFeedback = feedback.toLowerCase();
    const containsNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

    // Prepare message
    let message = `Feedback Word Count: ${wordCount}\n`;
    message += containsNegative ? "Needs Improvement" : "Positive Feedback";

    // Display result
    document.getElementById('result').textContent = message;
}
