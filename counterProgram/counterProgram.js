// Counter Program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// for the counter
let count = 0;

// increase function
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

// decrease function
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

// reset function
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}