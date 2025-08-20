// index.js
// This file contains the main JavaScript code for the application.
// It includes functionality for toggling the theme and a simple counter program.
// The theme toggle allows users to switch between dark mode and light mode.
// The counter program allows users to increase, decrease, or reset a count value.
// The code is structured to be modular, with the theme functionality separated into its own module.
// Import the toggleTheme function from the theme module
// and set up event listeners for the buttons in the HTML.

// Theme dark mode/light mode
// 1. Create a button in HTML
// 2. Add an event listener to the button 
// 3. Toggle a class on the body element
// 4. Create a CSS class that changes the background color and text color

import { toggleTheme } from "./theme.js";

document.getElementById("toggleTheme")?.addEventListener("click", toggleTheme);

// counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

const updateCountLabel = () => {
  countLabel.textContent = count;
};

increaseBtn.addEventListener("click", () => {
  count++;
  updateCountLabel();
});
decreaseBtn.addEventListener("click", () => {
  count--;
  updateCountLabel();
});
resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountLabel();
}); 

// Random number generator
// Import the generateRandomNumber function from numberGenerator.js
import generateRandomNumber from "./numberGenerator.js";

// Generate a random number and log it to the console
const randomNumber = generateRandomNumber();
console.log(`Generated random number: ${randomNumber}`);

document.getElementById("generateNumberBtn")?.addEventListener("click", () => {
  const randomNum = generateRandomNumber();
  document.getElementById("generateRandomNumber").textContent = `Random Number: ${randomNum}`;
});

// Reset the random number display
document.getElementById("resetNumberBtn")?.addEventListener("click", () => {
  document.getElementById("generateRandomNumber").textContent = "";
  console.log("Random number display reset.");
  generateRandomNumber(); // Reset the random number generator
});

// Roll a dice
/*const rollDiceBtn = document.getElementById("rollDiceBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const myLabel4 = document.getElementById("myLabel4");
const myLabel5 = document.getElementById("myLabel5");
const myLabel6 = document.getElementById("myLabel6");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;
let randomNum4;
let randomNum5;
let randomNum6;

rollDiceBtn?.addEventListener("click", () => {
  randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNum4 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNum5 = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNum6 = Math.floor(Math.random() * (max - min + 1)) + min;
   // Generates a random number between min and max
  document.getElementById("diceResult").textContent = `Your Dice Result: ${randomNum1}, ${randomNum2}, ${randomNum3}, ${randomNum4}, ${randomNum5}, ${randomNum6}`;
  myLabel1.textContent = `Dice 1: ${randomNum1}`;
  myLabel2.textContent = `Dice 2: ${randomNum2}`; 
  myLabel3.textContent = `Dice 3: ${randomNum3}`;
  myLabel4.textContent = `Dice 4: ${randomNum4}`;
  myLabel5.textContent = `Dice 5: ${randomNum5}`;
  myLabel6.textContent = `Dice 6: ${randomNum6}`;
});*/


// Roll a dice with delay


const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceLabels = [
  document.getElementById("myLabel1"),
  document.getElementById("myLabel2"),
  document.getElementById("myLabel3"),
  document.getElementById("myLabel4"),
  document.getElementById("myLabel5"),
  document.getElementById("myLabel6")
];

const min = 1;
const max = 6;

// Utility function to sleep for given ms
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async function to roll each dice with delay
const rollAllDice = async () => {
  const results = [];

  for (let i = 0; i < diceLabels.length; i++) {
    await sleep(1000); // Wait 1000ms before rolling each dice
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    diceLabels[i].textContent = `Dice ${i + 1}: ${result}`;
    results.push(result);
  }

  document.getElementById("diceResult").textContent = `Your Dice Result: ${results.join(", ")}`;
};

rollDiceBtn?.addEventListener("click", () => {
  rollAllDice();
});


