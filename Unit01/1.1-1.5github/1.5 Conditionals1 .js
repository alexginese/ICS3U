const prompt = require('prompt-sync')();
// Ask the for their age
let age = parseInt(prompt("How old are you? "));
//if 50 years old or older
if (age >= 50) {
    console.log("You qualify for the senior discount!");
} 
else if (age < 16) {
    //if younger than 16
    console.log("You're not old enough to drive yet.");
}
// Ask the user for their name
let userName = prompt("What is your name? ");
// Conditional on the userName
if (userName === "Mr. J") {
    console.log("🐠"); 
} 
else if (userName.length > 7) {
    console.log("You have a long name.");
}
// Ask the user how long their name is
let nameLength = parseInt(prompt("How many characters are in your name? "));
// Checks on the entered name length
if (nameLength === userName.length) {
    console.log("That's correct! ✔️");
} 
else if (nameLength > userName.length) {
    console.log("Too high ✖️");
} 
else {
    console.log("Too low ✖️");
}