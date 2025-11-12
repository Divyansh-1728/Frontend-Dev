function checkWeather() {
    const tempInput = document.getElementById('temperature').value;
    const humidityInput = document.getElementById('humidity').value;
    const windSpeedInput = document.getElementById('windSpeed').value;

    const temp = parseFloat(tempInput);
    const humidity = parseFloat(humidityInput);
    const windSpeed = parseFloat(windSpeedInput);

    // Validate inputs
    if (isNaN(temp) || isNaN(humidity) || isNaN(windSpeed)) {
        alert("Please enter valid numeric values for all fields.");
        return;
    }

    let alertMessage = "";
    // Weather safety rules:
    if (temp > 35 && humidity > 70) {
        alertMessage = "Cancel: Heat Alert.";
    } else if (temp < 10 || windSpeed > 40) {
        alertMessage = "Cancel: Cold/Windy Alert.";
    } else {
        alertMessage = "Event Approved.";
    }

    // Temperature based message
    let tempMessage = "";
    if (temp < 20) {
        tempMessage = "Wear Jacket";
    } else if (temp <= 30) {
        tempMessage = "Comfortable";
    } else {
        tempMessage = "Stay Hydrated";
    }

    // Display both messages
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = alertMessage + "\n" + tempMessage;
}
