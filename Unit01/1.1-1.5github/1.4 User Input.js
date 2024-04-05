const prompt = require('prompt-sync')();
// ask for age and store it 
let yearBorn = prompt("What year were you born? ");
// print age
console.log(`You entered ${yearBorn}`);
// calculate age
let currentYear = 2024;
let age = currentYear - yearBorn;
console.log(`You are ${age} years old`);
// ask the user for name
let name = prompt("What is your name? ");
//output 
console.log(`Hello, ${name}!. You were born in ${yearBorn} and you are ${age} years old.`);
// print length of  name
console.log(`Your name is ${name.length} letters long.`);
// ask for a temperature in Fahrenheit 
let temp1 = prompt("Enter a temperature in Fahrenheit: ");
//convert it to Celsius
let temp2 = (temp1 - 32) * 5/9;
//output number
console.log(`${temp1}F is equal to ${temp2}C.`);