/*document.getElementById("myH1").textContent = `Hello!`;
document.getElementById("myP").textContent = `This is my Summer Project.`;
*/
// variable = A container that stores a value
// 1. declaration let x;
// 2. assignment x = 100;

/*let x;
x = 100;
console.log(x);*/

// declaration and assignment

/*let x = 100;
console.log(x);

// Numbers
let age = 25;

console.log(`You are ${age} years old.`);
console.log(`The price is € ${x},-.`)

// Strings

let firstName = "Anne";
console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firstName}.`);
console.log(`Your name is ${firstName} and you are ${age} old.`);

// Booleans, true or false

let online = true;
let forSale = true;

console.log(`Anne is online: ${online}`);
console.log(`Is this car for sale: ${forSale}`);
*/

/*let fullName = "Anne Zwift";
let age = 53;
let isStudent = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your age is ${age}`;
document.getElementById("p3").textContent = `You are a student: ${isStudent}`;
*/

// arithmetic operators = operands (values, variables, etc.)
// operators (+ - * /)
// ex. 11 = x + 5;

//let students = 30;

//students = students + 1;
//students = students / 2;

//students += 1;
//students -= 1;

//students++;
//students--;

//console.log(students);

// Operator precedence
// 1. parenthesis ()
// 2. exponents
// 3. multiplication & divisions & modulo
// 4. addition & subtraction

//let result = 1 + 2 * 3 + 4 ** 2;

//console.log(result);


// How to accept user input

// 1. Easy way = window prompt
// 2. Professional way = HTML textbox

/*let username;

username = window.prompt("What's your username?");
console.log(username);
*/

/*let username;

document.getElementById("mySubmit").addEventListener("click", () =>  {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`

});
*/

// Type conversion = change the datatype of value to another

/*let age = window.prompt("How old are you");
age = Number(age);//convert to number from string
age+=1;

console.log(age, typeof age);*/

/*let x = "123";
let y = "123";
let z = ""; // false, if an user don't fill in the field will show false

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

// const = a variable that can't be changed
// radius of a circle

/*const PI = 3.14159; // replace let with const so it doesn't change
let radius;
let circumference;


document.getElementById("mySubmit").addEventListener("click", () => {
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + " cm";

});
*/

// Math = built-in object in JavaScript that provides a collection of properties and methods for mathematical constants and functions

/*console.log(Math.PI);
console.log(Math.E);

let x = 3.21;
let y = 2;
let z = 1;
let a = 2.99;
let b = 3.01;
*/
//z = Math.round(x); // rounds to the nearest integer
//console.log(z);

//a = Math.ceil(a); // rounds up to the nearest integer
//console.log(a);

//b = Math.floor(b); // rounds down to the nearest integer
//console.log(b);

//z = Math.trunc(x); // removes the decimal part
//console.log(z);

//z = Math.pow(x, y); // raises x to the power of y
//console.log(z);

//z = Math.sqrt(64); // calculates the square root
//console.log(z);

// z = Math.log(100); // calculates the natural logarithm
// console.log(z);    
// z = Math.random(); // generates a random number between 0 and 1
// console.log(z);
// z = Math.random() * 10; // generates a random number between 0 and 10
// console.log(z);
// z = Math.sin(30 * Math.PI / 180); // calculates the sine of 30 degrees
// console.log(z);  
// z = Math.cos(60 * Math.PI / 180); // calculates the cosine of 60 degrees
// console.log(z);
// z = Math.max(1, 2, 3, 4, 5); // returns the maximum value
// console.log(z);
// z = Math.min(1, 2, 3, 4, 5); // returns the minimum value
// console.log(z);

/*let max = Math.max(x, y, z, a, b);
console.log(max);

let min = Math.min(x, y, z, a, b);
console.log(min);
*/

// IF statements = used to execute code based on a condition
/*let age = 18; 
if (age >= 18) {
  console.log("You are an adult.");
}
else {
  console.log("You are a minor.");
}


let isStudent = false;

if (isStudent) {
  document.getElementById("isstudent").textContent = "You are a student.";
}
else {
  document.getElementById("isnotstudent").textContent = "You are not a student.";
}

let time = 12;

if(time > 12) {
  console.log("Good afternoon!");
}
else if (time === 12) {
  console.log("It's noon!");
} else {
  console.log("Good morning!");
}
  */

/*const isStudent = true;
const statusLabel = document.getElementById("studentStatus");

statusLabel.textContent = isStudent ? "You are a student." : "You are not a student.";

let age = 18;
let hasLicenses = true;

if (age >= 18) {
  console.log("You are old enough to drive.");
  if(hasLicenses) {
    console.log("You have a driving license.");
  }
  else {
    console.log("You do not have a driving license.");
  }
}
else {
  console.log("You are not old enough to drive.");
}
*/
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.addEventListener("click", () => {
  age = myText.value;
  age = Number(age); // convert to number from string

if (age >= 100) {
  resultElement.textContent = "You are too old to enter this site.";
}
else if (age == 0) {
  resultElement.textContent = "You can't enter. You were just born.";
}
else if (age >= 18) {
  resultElement.textContent = "You are old enough to enter this site.";
}
else if (age < 0) {
  resultElement.textContent = "Your age can't be below 0.";
}
else {
  resultElement.textContent = "You must be 18+ to enter this site.";
}

myText.value = ""; // Clear the input field after submission

});


// .checked = property of a checkbox that indicates whether it is checked or not
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn  = document.getElementById("visaBtn");
const masterCardBtn  = document.getElementById("masterCardBtn");
const payPalBtn  = document.getElementById("payPalBtn");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

const handleSubmit = () => {
  subResult.textContent = myCheckbox.checked
    ? "You are subscribed!"
    : "You are not subscribed!";

  const selectedPayment = document.querySelector('input[name="payment"]:checked');
  paymentResult.textContent = selectedPayment
    ? `You are paying with ${selectedPayment.value}.`
    : "Please select a payment method.";
};

submit?.addEventListener("click", handleSubmit);


// ternary operator - a shortcut to if{} and else {} statements helps to assign a variable based on a condition. Condition ? codeIfTrue : codeIfFalse;

let myAge = 21;

let message = myAge >= 53 ? "You are an adult." : "You are too young.";
console.log(myAge);
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is NOK ${purchaseAmount - purchaseAmount * (discount/100)},-.`);


// SWITCH = replace a lot of else if statements. You need the break to breakout of the SWITCH

let day = 1;

switch (day) {
  case 1:
    console.log("it is Monday");
    break;
  case 2:
    console.log("it is Tuesday");
    break;
  case 3:
    console.log("it is Wednesday");
    break;
  case 4:
    console.log("it is Thursday");
    break;
  case 5:
    console.log("it is Friday");
    break;
  case 6:
    console.log("it is Saturday");
    break;
  case 7:
    console.log("it is Sunday");
    break;
  default:
    console.log(`It's not a day.`)
    break;
}

let testScore = 82;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    console.log(`Your grade is ${letterGrade} that is fantastic!`);
    break;
  case testScore >= 80:
    letterGrade = "B";
    console.log(`Your grade is ${letterGrade} that is fantastic!`);
    break;
  default:
    letterGrade = "F";
    break;
}

// string methods = allow you to manipulate and work with text (strings)

/*let userName = "Anne- Zwift";*/

/*console.log(userName.charAt(0));
console.log(userName.indexOf("Z"));
console.log(userName.lastIndexOf("Z"));
console.log(userName.length);

// remove white spaces
userName = userName.trim();
console.log(userName);

userName = userName.toLocaleUpperCase();
console.log(userName);

userName = userName.toLowerCase();
console.log(userName);

userName = userName.repeat(3);
console.log(userName);*/

/*let result = userName.startsWith(" ");
console.log(result);

if (result) {
  console.log(`Your username can't begin with ""`);
}
else {
  console.log(userName);
}*/

/*let result = userName.endsWith(" ");
console.log(result);

if (result) {
  console.log(`Your username can't end with ""`);
}
else {
  console.log(userName);
}*/

/*let result = userName.includes(" ");
console.log(result);

if (result) {
  console.log(`Your username can't include a ""`);
}
else {
  console.log(userName);
}

let phoneNumber = "22-44-55-99";
console.log(phoneNumber);

phoneNumber = phoneNumber.replaceAll("-", " ");
console.log(phoneNumber);

/*phoneNumber = phoneNumber.padStart(16, "047-0");
console.log(phoneNumber);*/

/*phoneNumber = phoneNumber.padEnd(16, "0");
console.log(phoneNumber);*/


// string slicing string.slice(start, end)

//const fullName = "Anne Zwift";
//console.log(fullName);

/*let firstName = fullName.slice(0, 4);
let lastName = fullName.slice(5, 10);
console.log(lastName, firstName);

let firstChar = fullName.slice(0, 1);
console.log(firstChar);*/

//let lastChar = fullName.slice(5, 6);
//console.log(lastChar);

/*const fullName = "Susanne Zwift";

let firstName = fullName.slice(0, fullName.indexOf(" "));
console.log(firstName);

let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);*/


/*const email = "sykletur@icloud.com";

let username = email.slice(0, email.indexOf("@"));
let extensions = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extensions);*/

// method chaining = calling one method after another in one continuous line of code

// No method chaining

/*let username = window.prompt('Enter your username: ');

username = username.trim();
let letter = username.charAt(0);
letter = letter.toLocaleUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLocaleLowerCase();
username = letter + extraChar;

console.log(username);*/

// method chaining

/*let username = window.prompt('Enter your username: ');

username = username.trim().charAt(0).toLocaleUpperCase() + username.trim().slice(1).toLocaleLowerCase();

console.log(username);*/

//logical operators and = &&, or = ||, not = !

/*const temp = 10;

if (temp > 15 && temp <= 30) {
  console.log("The weather is good!")
} 
else {
  console.log("The weather is bad!")
}

const isSunny = true;

if(!isSunny){
  console.log("it is sunny");
}
else {
  console.log("it is cloudy")
}*/

// = assignment operator
// == comparison operator
// strict equality operator
// !inequality operator
// !== strict inequality

/*const PI = 3.16;

if (PI == "3.14") {
  console.log("That is PI");
}
else {
  console.log("That is not PI");
} */

// while loop = repeat some code While some condition is true

/*let username = "";

while (username === "" || username === null) {
  username = window.prompt('Enter your name');
} 
console.log(`Hello ${username}`);*/

/*let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in");
  }
  else{
    console.log("Invalid credentials! Please try again")
  }
}*/

// for loop = repeat some code a Limited amount of times 

/*for (let i = 0; i <= 2; i++) {
  console.log(i);
}*/

for(let i = 2; i <= 10; i+=2) {
  console.log(i);
}

for(let i = 10; i > 0; i--) {
  console.log(i);
}
