// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
const area = getArea(10);
console.log(`${circumference} cm`)
console.log(`${area} cm^2`)

// synchronous = Executes line by line consecutively in a sequential manner.

// asynchronous = Allows multiple operations to be performed concurrently 
//                without waiting for prior tasks. 

setTimeout(() => console.log("Task 1"), 3000);

// error = an object that is created to represent a problem that occurs
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try
// finally { } = Optional. Always executes. Used for clean up
try {
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
    console.log(x);

} catch (error) {
    console.error(error);

} finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("This always executes");
}

console.log("You have reached the end!");

// try {
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));

//     if (divisor == 0) {
//         throw new Error("You can't divide by zero!");
//     }

//     if (isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Values must be a number!");
//     }
//     const result = dividend / divisor;
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

console.log("You have reached the end!");

// DOM = Document Object Model
//       Object{} that represents the page you see in the web browser

// element selectors = Methods used to target and manipulate HTML elements

// 1. document.getElementById()
// 2. document.getElementsClassName()
// 3. document.getElementsByTagName()
// 4. document.querySelector()
// 5. document.querySelectorAll()


// Step 1 Create the Element
const newH1 = document.createElement("h1");

// Step 2 add attributes and properites
newH1.textContent = 'I like pizza';
newH1.id ="myH1";

// Step 3 Append to the DOM
document.body.append(newH1);

// eventListener = LIsten for specific events to create interactive web pages