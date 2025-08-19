// number guessing game

/*const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;
let guess;
let running = true;*/

/*while (running) {
  
  guess = //window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess);
  console.log(guess);
 
  if (isNaN(guess)) {
    //window.alert("Please enter a valid number");
  }
  else if (guess < minNum || guess > maxNum) {
    //window.alert("You have to enter a number between 1 and 100");
  }
  else {
    attempts++;
    if (guess < answer) {
      //window.alert("Too LOW! Try again.");
    }
    else if (guess > answer) {
      //window.alert("Too HIGH! Try again.");
   }
   else {
    //window.alert(`Correct! The answer was ${answer}`);
   }
  }
  running = false;

}*/

// number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

console.log(answer);

let attempts = 0;

