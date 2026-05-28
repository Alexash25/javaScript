let username;

// username = window.prompt("What is your username?");

// html text box
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    
    // this is for debugging
    console.log(username);

    // replace welcome header with user input
    document.getElementById("myH1").textContent = `Hello, ${username}`;
}

// type conversion

// you should type convert because it just string concatenates
let age = window.prompt("How old are you?");
age =  Number(age);
age += 1;

console.log(age, typeof age);

// constants
