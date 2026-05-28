console.log("JavaScript loaded!");

const forwardBtn = document.getElementById("forwardBtn");
const backwardBtn = document.getElementById("backwardBtn");
const stopBtn = document.getElementById("stopBtn");

// create a command to send to the esp32
function sendCommand(command) {
    console.log("Sending:", command);
    fetch(command);
}
// if forward button is clicked
forwardBtn.addEventListener("click", function() {
    sendCommand("/forward");
});

// if backward button is clicked
backwardBtn.addEventListener("click", function() {
    sendCommand("/backward");
});

stopBtn.addEventListener("click", function() {
    sendCommand("/stop");
});