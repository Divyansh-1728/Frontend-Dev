let count = 0;

function increment() {
    function updateCount() {
        count++;
        logAction("Increment");
        updateDisplay();
    }
    updateCount();
}

function decrement() {
    function updateCount() {
        count--;
        logAction("Decrement");
        updateDisplay();
    }
    updateCount();
}

function updateDisplay() {
    document.getElementById('countDisplay').textContent = count;
}

function logAction(action) {
    const logDiv = document.getElementById('log');
    const message = `${action} called. Current count: ${count}`;
    logDiv.textContent = message + "\n" + logDiv.textContent;
}

// Initialize display
updateDisplay();
