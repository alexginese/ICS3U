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
