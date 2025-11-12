function checkSecurity() {
    const isDoorLocked = document.getElementById('isDoorLocked').checked;
    const isWindowClosed = document.getElementById('isWindowClosed').checked;
    const isAlarmOn = document.getElementById('isAlarmOn').checked;
    const isOwnerInside = document.getElementById('isOwnerInside').checked;

    // Access granted if alarm is on AND door and window are closed AND owner is inside
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = isSecure ? "Secure" : "Unsafe";
}
