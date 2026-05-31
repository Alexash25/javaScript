
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}|:>?<>/";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return "(You must set at least one condition to true)";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
const passwordLength = 12;
const includeLowerCase = false;
const includeUpperCase = true;
const includeNumbers = false;
const includeSymbols = false;

const password = generatePassword(passwordLength, 
                                includeLowerCase, 
                                includeUpperCase, 
                                includeNumbers, 
                                includeSymbols);

console.log(password);

let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}
function display(element) {
    console.log(element);
}

let fruits = ["banana", "orange", "apple", "coconut"]

function displayFruit(element) {
    console.log(element);
}

function toUppercase(element, index, array) {
    // method belongs to the element (string)
    array[index] = element.toUpperCase();
}

function toLowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

fruits.forEach(toUppercase);
fruits.forEach(displayFruit);
fruits.forEach(toLowercase);
fruits.forEach(displayFruit);
fruits.forEach(capitalize);
fruits.forEach(displayFruit);

// callback = function passed as an argument to another function.
/*
function hello(goodbye) {
    console.log("Hello!");
    callback();s
}

function goodbye() {
    console.log("Goodbye!");
}
*/

// forEach() = method used to iterate over the elements and apply a specific function (callback) to each element
/* 
Example

let numbers = [1,2,3,4];

numbers.forEach(double);
numbers.forEach(display);

function double(double, index, array) {
    array[index] = element * 2;
}
function display(element) {
    console.log(element);
}
*/

// .map() = accepts a callback and applies that function and creates a NEW array

const numbers2 = [1, 2, 3, 4, 5];

const squares = numbers2.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}

function square(element) {
    return Math.pow(element, 3);
}

const dates = ["2024-1-10", "2025-2-12", "2026-4-29"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element) {
    // split at each dash
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;

}

// .filter() = creates a new array by filtering out elements

let nums = [1,2,3,4,5,6,7];
let onlyEven = nums.filter(isEven);

console.log(onlyEven);

function isEven(element) {
    return element % 2 === 0;
}

const ages = [18, 16, 17, 18, 21, 20, 60];
const adults = ages.filter(isAdult);

console.log(adults);

function isAdult(element) {
    return element >= 18;
}

// .reduce() = reduce the elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20]; 

const total = prices.reduce(sum);

console.log(`The total is: ${total.toFixed(2)}`);

function sum(accumulator, element) {
    return accumulator + element;
}

// function expressions = a way to define functions as values or variables

const hello = function () {
    console.log(`Hello!`);
}

// to invoke hello, we have to use hello();

setTimeout(hello, 3000);

// arrow functions = simple functions you only use once
// regular function
const goodbye = (name) => console.log(`Goodbye!${name}`);

goodbye("Alex");

// objects = collection of related properties

const person1 = {
    firstName: "Alex",
    lastName: "Tiu",
    age: 21,
    isEmployed: true,
    favFood: "sushi",
    eat: function(){console.log(`Hi! I love ${this.favFood}`)}
}

const person2 = {
    firstName: "Sydney",
    lastName: "Tiu",
    age: 11,
    isEmployed: true,
    favFood: "poopies",
    eat: function(){console.log(`Hi! I love ${this.favFood}`)}
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

// this = reference to the object. object depends on immediate object

person1.eat();
person2.eat();

// constructor = special method for defining the properites and methods of objects

function Car(make, model, year, color) {
    this.make = make,
    this.model = model, 
    this.year = year,
    this.color = color,
    this.drive = function() {console.log(`You drive the ${this.model}`)}
}

const car1 = new Car(`Toyota`, `Corolla Cross`, `2024`, `Blue`);

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.drive());

// class = structured way to work with objects