
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

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);
const product3 = new Product("Underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
const totalCost = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);

// static = keyword that defines properites or methods that belong to a class itself rather than the objects created
//          from that class (class owns anything static, not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

// You don't need an object to access PI.
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");

console.log(user1.username);
console.log(User.userCount);

class Animal {
    alive = true;
    eat() {
        console.log(`This ${this.name} is eating`);
    }
}