// Stock Risk Calculator

// constants and variables
const stockInput = document.getElementById("stockInput");
const priceInput = document.getElementById("priceInput");
const riskInput = document.getElementById("riskInput");
const output = document.getElementById("output");

// debug check
document.getElementById("calculateRisk").onclick = function() {
    console.log(`Stock: ${stockInput.value}`);
    console.log(`Price: ${priceInput.value}`);
    console.log(`Risk: ${riskInput.value}`);
}

// functions
function calculateRisk() {
    
}

// when the button is clicked, call the function calculateRisk
document.getElementById("calculateRisk").onclick = calculateRisk;
