var topic = "JavaScript";

if (topic) {
  let topic = "ECMAScript";
  console.log("block", topic);
}

console.log("global", topic);

var div;
var box = document.getElementById("box");

for (let i = 0; i < 5; i++) {
  div = document.createElement("div");
  div.onclick = function() {
    alert("This is box # " + i);
  }
  box.appendChild(div);
}

//template string

function print(firstName) {
  console.log(`Hello ${firstName}`);
}

print("Anne");

function createEmail(firstName, price) {
  let shipping = 5.95;
  console.log(`Hi ${firstName}! Thanks!
    Total: $ ${price}
    Shipping: $ ${shipping}
    Gran Total: $ ${price + shipping}
  `);
}

createEmail("Guy", 100);

// searching strings

const planet = "Earth";
console.log(planet.startsWith("Ear")); //case sensitive
console.log(planet.endsWith("th"));
console.log(planet.includes("rt"));
console.log(planet.search("art")); // gives the number

// primitives
// numbers, objects, stings, arrays and more

// symbols, avoid naming conflicts

const id = Symbol();

const courseInfo = {
  title: "JavaScript",
  topics: ["strings", "arrays", "objects"],
  id: "js-course"
};

courseInfo[id] = 41284;
console.log(courseInfo);

// map object
// holds key value pairs

let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});

console.log(course);
console.log(course.react); //this won't work, use get
console.log(course.get("react"));

let details = new Map([
  [new Date(), "today"],
  [2, {javascript: ["js", "node", "react"]}],
  ["items", [1, 2]]
]);

console.log(details);

details.forEach(function (item) {
  console.log(item);
});


// sets

let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");
console.log("has Oliver Twist", books.has("Oliver Twist"));

// task

const showExpectedResult = false;
const showHints = false;

const username = "Anne";
const age = 32;

const result = processUserData(username, age);
console.log(result);

function processUserData(username, age) {

  const userData = {username, age};

  const welcomeMessage = `Welcome, ${username}! You are ${age} years old.`;

  const isAdmin = username.toLowerCase().includes("admin");

  return {
    userData,
    welcomeMessage,
    isAdmin
  };


}

// ... spread operator

let cats = ["Biscuit", "Jungle"];
let dogs = ["Zoe", "Stella"];

let animals = ["Smoky", "Miro", "Swimmy", ...cats, ...dogs]; // spread operator add the cats and dogs array on same level

console.log(animals);

// destructuring arrays

let cities = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];

console.log(cities[0]);

// destructuring method

let [first, second, third, fourth, fifth] = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];

console.log(first);
console.log(third, fourth);

// .includes() help you search arrays


let towns = ["Spokane", "Boston", "Los Angeles", "Seattle", "Portland"];

console.log(towns.includes("Boston")); //gives true
console.log(towns.includes("New York")); //gives false

// task

  const array = [10, 20, 30, 40];
  const searchValue = 30;

  console.log(array, searchValue);

function containsValue(array, searchValue) {
  return array.includes(searchValue);
 
}

console.log(containsValue);

// object Literals

/*function skier(name, sound) {
  return {
    name: name,
    sound: sound,
    powderYell: function() {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    }
  }
}

console.log(skier("Sendy", "woo").name);
skier("Sendy", "woo").powderYell();
*/
// with object literals enhancement we can shorten this a bit

function skier(name, sound) {
  return {
    name,
    sound,
    powderYell: function() {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    }
  }
}

skier("Sendy", "Yeah").powderYell();

// spread operator with objects

const daytime = {
  breakfast: "oatmeal",
  lunch:"peanut butter and jelly"
};

const nighttime = "mac and cheese";

const backpackingMeals = {
  ...daytime,
  nighttime
};

console.log(backpackingMeals);

// destructuring
// you put what you want in {}

const { title, price, description} = {
  title: "Reuben",
  price: 7,
  description: "A classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "cheese"

  ]
}

console.log(title, price, description);

const vacation = {
  destination: "Chile",
  travelers: 2,
  activity: "skiing",
  cost:"so much"
};

function marketing({destination, activity}) {
  return `Come to ${destination} and do some ${activity}`;
}

console.log(marketing(vacation));


// for/of Loop