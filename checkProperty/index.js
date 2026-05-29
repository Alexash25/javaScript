// .checked = property that determines the checked state of
//            an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function() {
    
    if (myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;

    } else {
        subResult.textContent = `You are NOT subscribed`;
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visa`;
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with MasterCard`;
    } else if (payPalBtn.checked) {
        paymentResult.textContent = `You are paying with PayPal`;
    } else {
        paymentResult.textContent = `You must select a payment type`;
    }
}

/*
switch(day) {
    case 1:
        console.log(`It is Monday`);
        break;
    case 2:
        etc. etc.
}
*/

/*
String Methods

example.charAt(0);
example.indexOf("c");
example.lastIndexOf("o");
example.length;
example.trim();
example.toUpperCase();
example.toLowerCase();
example.repeat(1);
example.startsWith(" ");
example.endsWith(" ");
example.includes(" ");
example.replaceAll(" ", "");
example.padStart(15, "0");
example.padEnd(15, "0");

String Slicing

const fullName = "Alex Tiu";

# ending index is exclusive
let firstName = fullName.slice(0, 2);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

# combine with indexOf for mor dynamic slicing

Method Chaining

# this program will trim whitespace, make the first letter upper case
# and then make every other letter lowercase
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

# with method chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

Strict Equality

=== if they have the same data type as well


While Loops

keep doing something until it's true

do-While Loop

execute the first portion at least once
do {

} while () {

}

let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt()
    password = window
}

For Loop

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue;
    } else {
        console.log(i);
    }
}
*/