
// constants and variables
const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    
    if(toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F°";

    } else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "C°"

    } else {
        result.textContent = "Select a unit";
    }
}

// Arrays
/* 
let fruits = ["apple", "orange", "banana"];
fruits.push("coconut");
fruits.pop();
fruits.unshift("mango");
fruits.shift();
fruits.length;
fruits.indexOf("apple"); returns -1 if the element DNE

use a for loop to iterate through array
for (let fruit of fruits) {
    console.log(fruit); This is an enhanced for loop
}

fruits.sort();
fruits.sort().reverse();
*/

// Spread operator = ... allows an iterable such as array or string to be expanded (unpack the elements).
/*
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);

This is how you find the max or minimum of an array

// Reset parameters = allow a function to work with a variable number of arguments by bunding them into an array

they go into a function.
*/