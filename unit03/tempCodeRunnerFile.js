const prompt = require('prompt sync')();
//function 1
//create function
function countdown(start, stop){
//prompt user for a start a stop number
start=parseint(propmt("enter a starting number:"));
stop=parseint(propmt("enter a stopping number:"));
//while start>stop it will print the start number -1
while (start > stop){
  console.log(start);
  start=start-1;
}
//if not it will print the stop value which would be equal to the amount of time it lopped as it is going down by 1
console.log(stop)
}
//call the function
countdown()
