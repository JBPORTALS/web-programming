// function sample() {
//   var a = 10;

//   if (true) {
//     var a = 20;
//     console.log(a); //20
//   }

//   console.log(a); //20
// }

// sample();

//Create a funtion for calculate the square of the number
//Create a funtion for combine two strings with the space
//Create a funtion that has to take full name and the gender, then based on the gender combine name with the respect of sir/medam.

//Conditional Statements

//Conditional Operator
/**
 *  == - values must be same, but not datatype
 *  != - values must not be same, but not datatype
 *  === - values and datatype must be same
 *  !== - values and datatype must be diffrent.
 *  <  - left value must be less than right value.
 *  >  - left value must be greater than right value.
 *  <= - left value must be less than or equal to right value
 *  >= - left value must be greater than or equal to right value
 */

//Logical Operators
/**
 * && - AND Operator - If all the conditions are true then result will be true, otherwise false;
 * || - OR Operator - Among all the conditions any one of the condition true then result will be true, otherwise false;
 * ! - NOT Operator - if value is true then it will return it as a false and viseversa.
 */

// const a = 2;
// const b = 2; //true

// const c = 7;
// const f = 8; //false

// const isAdult = false;

// //final output should be true

// //   TRUE && FALSE || FALSE
// //   FALSE || FALSE
// //   FALSE
// if ((!isAdult && a !== b) || c === 8) {
//   console.log("Your not elligible to vote");
// } else {
//   console.log("Your elligible");
// }

// const fullname = "RANDOM";
// const marks = 100;
// const isAdult = "I am monster";

// if (marks < 35) {
//   console.log("FAIL");
// } else if (marks >= 35 && marks < 65) {
//   console.log("PASS");
// } else if (marks >= 65 && marks < 85) {
//   console.log("FIRST CLASS");
// } else if (marks >= 85 && marks < 100) {
//   console.log("DISTINCTION");
// } else {
//   console.log("FIRST RANK");
// }

// switch (isAdult) {
//   case true:
//     console.log("Hi, your elligible for vote");
//     break;

//   case false:
//     console.log("Hi, your not elligible for vote");
//     break;

//   default:
//     console.error("Invalid isAdult data type value");
//     break;
// }

// BANKING SYSTEM
/**
 *  1. User has to enter their fixed username and password.
 *  2. Then you have to greet the user.
 *  3. You will give 2 options - 1. Withdraw 2. Deposit
 *  4. When user selects the 1 option you will ask for vlaue of amount - if that amount valid according to their balance then you will minus that amount from total balnce amount then youy
 */

/**
 * Structured data types
 *  1. Array - list of items with diffrent datatypes.
 *  2. Object - it's key value pairs
 */

// const names = ["a", "b", "c", "d"]; //4

// const findEle = (param) => {
//   return names.find((value) => value === param);
// };

// const numbers = [2, 3, 4, 5, 8];
// console.log(numbers);

// const result = numbers.map((value) => value * value);

// const push_result = numbers.push(23, 89, 100, 200);

// const del_result = numbers.splice(0, 5); // used for delete multiple elements, but Slice is used for pick up the elements from the array to given start and end number.

// numbers.console.log(del_result, numbers);

// const student = {
//   name: "John Doe",
//   age: 23,
//   gender: "MALE",
// };

// const students = [
//   {
//     name: "jhon",
//     age: 18,
//     docs: ["adhar", "pan", "id card"],
//     contact: [
//       { type: "MOTHER", number: "12345" },
//       { type: "FATHER", number: "2564584" },
//     ],
//   },
//   {
//     name: "pavan",
//     age: 22,
//     docs: ["adhar", "pan", "id card"],
//     contact: [
//       { type: "MOTHER", number: "12345" },
//       { type: "FATHER", number: "2564584" },
//     ],
//   },
//   {
//     name: "george",
//     age: 25,
//     docs: ["adhar", "pan", "id card"],
//     contact: [
//       { type: "MOTHER", number: "12345" },
//       { type: "FATHER", number: "2564584" },
//     ],
//   },
// ];

// students.map((student) => {
//   console.log(
//     student.name,
//     student.age,
//     "Documents",
//     student.docs.join(","),
//     "CONTACT DETAILS",
//     student.contact
//   );
// });

// const data = async () => {
//   console.log("loading...");
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   console.log(res.body);
//   console.log("loaded");
// };

// data();

// const root = document.getElementById("root");

// const loadDOM = () => {
//   const xhttp = new XMLHttpRequest();
//   xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//   xhttp.onreadystatechange = (ev) => {
//     if (xhttp.status === 200) {
//       const data = JSON.parse(ev.target.response);
//       data.map((todo) => {
//         const li = document.createElement("li");
//         li.innerText = todo.title;
//         root.appendChild(li);
//       });
//       // span.innerText = data.
//     } else {
//       console.log("No data!");
//     }
//   };
//   xhttp.send();
// };

// loadDOM();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const SNAKE_SPEED = 500;
let snakeX = 0;
let snakeY = 0;
let snakeSize = 10;

const loadSnake = (x, y) => {
  ctx.fillRect(x, y, snakeSize, snakeSize);
  ctx.fill();
};

console.log(ctx);

setInterval(() => {
  ctx.clearRect(0, 0, 600, 400); //clearing the canvas
  loadSnake(snakeX, snakeY); //loading snake
  snakeX += snakeSize;
  console.log(snakeX);
}, SNAKE_SPEED);

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      snakeY -= snakeSize;
      break;
    case "ArrowDown":
      snakeY += snakeSize;
      break;
  }
});
