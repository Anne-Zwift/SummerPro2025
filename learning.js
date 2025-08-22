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

/*for (let letter of "JavaScript") {
  console.log(letter);
}

let topics = ["JavaScript", "Node", "CSS"];

for (let topic of topics) {
  console.log(topic);
}
*/
let topics = new Map();
topics.set("HTML", "/topic/html");
topics.set("CSS", "/topic/css");
topics.set("JavaScript", "/topic/javascript");

for (let route of topics.values()) {
  console.log(`The course description can be found at ${route}`);
}

// classes

class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }

  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels.`);
  }
}

/*let coolSkiVan = new Vehicle("cool ski van", 4);

console.log(coolSkiVan);
coolSkiVan.describeYourself();
*/


// inherit from the class

class SemiTruck extends Vehicle {
  constructor() {
    super("semi truck", 18);
  }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.describeYourself();

// get and set method - getters and setters

let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },

  get list() {
    return this._list.join(", ");
  }
};

attendance.addName = "Joanne Starr";
console.log(attendance.list);

attendance.addName = "Bill Starr";
attendance.addName = "Charlie Starr";
attendance.addName = "Johnny Starr";

console.log(attendance.list);

class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }

  get lengthInHours(){
    return `${this.calcLength()} hours hike.`;
  }
  calcLength() {
    return this.distance / this.pace;
  }
}

const mtTallac = new Hike(10, 2);

console.log(mtTallac.lengthInHours);

//task

const productName = "Laptop";
const productPrice = 999.99;
const product = createProduct(productName, productPrice);

function createProduct(name, price) {
  
  return {
    name,
    price,
    display() {
      return `Product: ${name}, Price: $${price}`;
    }
  };
}

console.log(createProduct);
console.log(product);
console.log("Display output:", product.display());


// .repeat()

let yell = "woo!";

let party = yell.repeat(20);
console.log(party);

let cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  purr(times) {
    console.log("purr".repeat(times));
  },
  snore(times) {
    console.log("ZzZzZz".repeat(times));
  }
}

cat.meow(3);
cat.purr(5);
cat.snore(8);

// default Parameters

function add(x = 2, y = 3) {
  console.log(x + y);
}

add(6, 3);// this is overwriting the function

function haveFun(activityName = "hiking", time = 3) {
  console.log(`Today I will go ${activityName} for ${time} hour(s).`)
}

haveFun("biking", 1);
haveFun();


// arrow Functions =>

let studentsList= (students) => 
  console.log(students);

studentsList(["A", "B", "C"]);

let list = ["apple", "banana", "cherry"];
list.map((item) => console.log(item));

// arrow functions the old way

/*let person = {
  first: "Angie",
  hobbies: ["bike", "hike", "ski"],
  printHobbies: function() {
    let _this = this;
    this.hobbies.forEach(function (hobby) {
      let string = `${_this.first} likes to ${hobby}`;
      console.log(string);
    });
  }
};

person.printHobbies();*/

// better approach with arrow function

let person = {
  first: "Angie",
  hobbies: ["bike", "hike", "ski"],
  printHobbies: function() {

    this.hobbies.forEach((hobby) => {
      let string = `${this.first} likes to ${hobby}`;
      console.log(string);
    });
  }
};

person.printHobbies();

// generators

function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action!";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);


// task, format text


/*function formatText(text, indentLevel = 1) {
  return " ".repeat(indentLevel * 2) + text;
}*/

const text = "Hello, this is great!";
const indentLevel = 2; 

const formatText = (text, indentLevel = 1) => {
  return " ".repeat(indentLevel * 2) + text;
}

console.log(formatText(text, indentLevel));

// promises async/ waiting is going on
// a delay for something we ask for and when we receive it, fetching data

/*const delay = (seconds) =>
  new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      return reject(new Error("seconds must be a number"));
    }
    setTimeout(resolve, seconds * 1000);
  });

 

console.log("Zero seconds");
delay(1).then(() => console.log("1 sec"));
delay(5).then(() => console.log("5 secs"));
*/

// promises api

/*const spacePeople = () => {
  return new Promise((resolve, reject) => {
    const api = "http://api.open-notify.org/astros.json";
    const request = new XMLHttpRequest();
    request.open("GET", api);
    request.onload = () => {
      if (request.status === 200) { 
        resolve(JSON.parse(request.response));
      } else {
        reject(Error(request.statusText));
      }
    };
    request.onerror = err => reject(err);
    request.send();
  });
};

spacePeople()
.then((spaceData) => console.log(spaceData))
.catch((err) => console.error(new Error("Can't load people"), err));*/

// async/await

/*const delay = (seconds) =>
  new Promise((resolves) => setTimeout(resolves, seconds * 1000));

const countToFive = async () => {
  console.log("zero seconds");
  await delay(1);
  console.log("one second");
  await delay(2);
  console.log("two second");
  await delay(3);
  console.log("three second");
  await delay(4);
  console.log("four second");
  await delay(5);
  console.log("five second");
}
countToFive();*/

// async/await with fetch
// we are waiting to get some data back

const githubRequest = async (login) => {
  let response = await fetch(`https://api.github.com/users/${login}`);
  let json = await response.json();
  let summary = `${json.name}, ${json.company}`;
  console.log(summary);
};
githubRequest("Anne-Zwift");


// task


const Userid = 42;


async function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id,
        timestamp: Date.now(),
        data: `Data for ID: ${id}`
      });
    }, 1000);
  });
}

async function showData() {
  const result = await fetchData(Userid);
  console.log(result);

  // Convert timestamp to readable date
  const date = new Date(result.timestamp);
  console.log(date.toString());
}

showData();
