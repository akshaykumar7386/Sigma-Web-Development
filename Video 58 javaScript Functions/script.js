// function nice(name) {
//     console.log("Hello " + name + " how are you");
//     console.log("Hello " + name + " what are you doing?");
//     console.log("Hello " + name + " how are you doing?");
//     console.log("Hello " + name + " what about today?");
// }
// nice("Akshay");


// function square(number) {
//     return number * number;
// }
// console.log(square(5));
// console.log(square(10));
// console.log(square(15));

// function isEven(number) {
//     return number % 2 === 0;  
// }

// console.log(isEven (4)); // true
// console.log(isEven (5)); // false


// function GreetUser(name, time) {
   
//     if (time <= 12) {
//         console.log("Good Morning " + name + "!");
//     }
    
//     else {
//         console.log("Good Evening " + name + "!");
//     }}

// GreetUser("Akshay", 11);
// GreetUser("Nani", 18);


// function checkNumberType(num) {
//    console.log("Number: " + num + ", Type: " + (num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero")));
//   }
  
//   checkNumberType(10);   
//   checkNumberType(-5);  
//   checkNumberType(0);  
  

//   const function1 = (x) => {
//     console.log("Function1 " + x);}

//     function1(10);

// const factorial = (num) => {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   };
  
//   console.log(factorial(4));  // 24
//   console.log(factorial(5));  // 120

  
// const multiplyAndCheck= (num1, num2) =>{
//   const result = num1 * num2;
//   if (result>= 100) {
//     console.log("Big Number: " + result);
//   }

//   else {
//     console.log("Small Number: " + result);
//   }
// };
// console.log(multiplyAndCheck(10, 5));    
// console.log(multiplyAndCheck(20, 6));


//  const add = (num1, num2) => num1 + num2;
// console.log(add (921, 10));

// const number = (num3, num7, num9 ) => ((num3 +  num7) * num9) ;

// console.log(number(1, 2, 3));

// const number =( akshay, nani, shiva) => "hello " + akshay + ", are you good " + nani + ", what about you " + shiva;

// console.log(number("Akshay", "Nani", "Shiva"));

// const x =[1, 2, 3].map(n => n * 2 ); // ❌ Unexpected result
// const y = [1, 2, 3].map(n => n * 2);      // ✅ Works

// console.log(x);
// console.log(y);

// const number= (num1, num2, num3) => ((num1, num2, num3)*3);

// console.log(number(2, 6, 8));
// // A. [3, 6, 9]  
// B. [1, 2, 3]  
// C. Error  

