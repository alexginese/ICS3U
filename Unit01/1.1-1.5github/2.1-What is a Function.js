const prompt = require('prompt-sync')();
//make function whoAreYou
function whoAreYou() {
    let name = prompt("What is your name?");
    let age = prompt("How old are you?");
    let favouriteHobby = prompt("What is your favourite hobby?");
    //output  
    console.log("Hello" + name + "you are" + age + "years old and your favourite hobby is" + favouriteHobby);
}
function tax_calculator(dollars) {
    dollars = (dollars);
    //calc the tax 
    let tax = (dollars * 0.13).toFixed(2);
    //calc the total
    let total = (dollars + taxCalc).toFixed(2);
    //output
    console.log(`Original Value: ${dollars.toFixed(2)}\nTax (13%): ${taxCalc.toFixed(2)}\nTotal: ${total.toFixed(2)}`);
}

function calculator(operator) {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    //conditinals
    if (operator === '+') {
        console.log(num1 + num2);
    } 
    else if (operator === '-') {
        console.log(num1 - num2);
    } 
    else if (operator === '*') {
        console.log(num1 * num2);
    } 
    else if (operator === '/') {
        console.log(num1 / num2);
    } 
    else {
        console.log("Invalid operator.");
    }
}
function pythagorean(legA, legB, hypoteneuse) {
    // if hypoteneuse is false
    if (!hypoteneuse) {
        //output
        console.log(Math.sqrt(legA * legA + legB * legB));
    }
    // if legA is false
    else if (!legA) {
        //output
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legB * legB));
    } 
    // if legB is false
    else {
    //output
        console.log(Math.sqrt(hypoteneuse * hypoteneuse - legA * legA));
    }
}