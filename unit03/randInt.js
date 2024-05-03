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

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function random_until(min, max, stop){
  min = parseint(prompt("Enter a min value:"))
  max = parseint(prompt("Enter a max value:"))
  stop = parseint(prompt("Enter a stop value:"))
  if (min >= max){
      return(-1)
  }
  else if ((stop <= min)&&(stop >=max)){
      return (-1)
  }
  else{
      let num = randInt(min, max)
      while (num != stop){
          console.log("Random Number:" + num)
          num = randInt(min, max)
      }
  }
}
random_until()

// Just in case the code is needed outside of the README.md

// Return a random integer from min to max (inclusive)
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }