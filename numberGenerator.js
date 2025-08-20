// Random number generator

const min = 1; // Minimum value for the random number
const max = 100; // Maximum value for the random number

let randomNum = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
console.log(`Initial random number: ${randomNum}`);
// Log the initial random number to the console
// This function generates a random number between min and max
// It can be used in other parts of the application
// numberGenerator.js

export const generateRandomNumber = () => {
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random number between min and max
  return randomNum;
} 

// Export the random number generator function
