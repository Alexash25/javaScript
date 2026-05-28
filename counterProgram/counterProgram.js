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

// Math methods
// Math.floor(x)
// Math.ceil(x)
// Math.trunc(x)
// Math.pow(x, y);
// Math.sqrt(x);
// Math.log(x);
// Math.sin(x);
// Math.cos(x);
// Math.abs(x);
// Math.max(x);
// Math.min(x);

// Random Numbers
// Math.random();
// Math.floor(Math.random() * 6) + 1; For whole numbers, exclusive