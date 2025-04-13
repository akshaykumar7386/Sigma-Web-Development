// let loggedIn = true;
// console.log(loggedIn ? "Welcome back!" : "Please log in.");

// let number = 6
// console.log(number % 2 === 0 ? "its is a odd number  " : "its is a even number ");

// let age = number(prompt ("Enter your age: "));
// console.log(age >= 18 ? " You’re an adult ": " You’re a minor "); 

// let Age = parseInt(prompt ("Enter your age: "));
// console.log(Age >= 18 ? " You’re an adult ": " You’re a minor "); 

// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));
// let c = Number(prompt("Enter third number:"));

// console.log(
//   a > b && a > c 
//     ? "a is the largest number" 
//     : b > a && b > c 
//       ? "b is the largest number" 
//       : "c is the largest number"
// );


// let unit = prompt("Type 'C' to convert from Celsius to Fahrenheit or 'F' for Fahrenheit to Celsius:");
// let temp = Number(prompt("Enter the temperature:"));

// let result = unit === "C" 
//   ? `${temp}°C is ${(temp * 9/5 + 32).toFixed(2)}°F` 
//   : `${temp}°F is ${((temp - 32) * 5/9).toFixed(2)}°C`;

// console.log(result);


// let price = Number(prompt("Enter the total amount: "));

// let finalTotal = 
//   price >= 500 
//     ? price - (price * 0.20)
//     : price >= 200 && price < 500 
//       ? price - (price * 0.10)
//       : price;

// let message = 
//   price >= 500 
//     ? `You get 20% off! Your final total is ₹${finalTotal.toFixed(2)}`
//     : price >= 200 && price < 500 
//       ? `You get 10% off! Your final total is ₹${finalTotal.toFixed(2)}`
//       : `No discount. Your total is ₹${finalTotal.toFixed(2)}`;

// console.log(message);


// let bill = Number(prompt("Enter the bill amount: "));
// let people = Number(prompt("Number of people: "));
// console.log( `Each person should pay: ₹${(bill / people).toFixed(2)}`);


let age = 18;
let message = age >= 18 ? "You’re an adult" : "You’re a minor";
console.log(message);  // Output: You’re an adult
