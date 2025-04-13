// alert("Hello, World");

console.log("hey iam a cconsole log message");

var a= prompt("Enter a number");

var isTure = confirm ("Are you sure you want to continue to leave this page and blast your computer ")
if (isTure) { 
    console.log("Computer is blasting now...")
}

else{
    console.log("Computer is not blasting now")
}


console.log("Your entered number is " + a); 

let age = 17;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");

}

let marks = 21; 

    if (marks >= 90 ) {
        console.log ("Greade A" );
        }
    else if (marks >= 70 ) {
        console.log("Greade B" );
        }

    else if (marks >= 50 ) {
        console.log("Greade C");
        }

    else if (marks >= 30 ) {
        console.log("Greade D");
        }    

    else { (marks>= 20 )
        console.log ("failed" );
        }
        let time = 13;

        if (time < 12) {
          console.log("Good Morning!");
        } else if (time < 17) {
          console.log("Good Afternoon!");
        } else if (time < 21) {
          console.log("Good Evening!");
        } else {
          console.log("Good Night!");
        }
        
        let x = "7"; ("this is a string")
        let y = 7; ("this is a number")
        if (x == y) {
          console.log("Loose match");
        }
        
        if (x === y) {
          console.log("Strict match");
        } else {
          console.log("Strict no match");
        }

        let Age = prompt("Enter your age:");
        Age = Number(Age); // 🔥 Convert input string to number

        if (Age === 18) {
        console.log("You're allowed");
        } 
        else if (Age == 18) {
        console.log("You might be allowed");
        } 
        else {
        console.log("You're not allowed");
        }

        let secret  = 5;
        let guess = prompt("Guess the secret number:");
        guess = Number(guess);

        if (guess === secret) {
            console.log("You guessed it right!");
        }
        else if (guess > secret) {
            console.log("Too high! Try again.");
        } 
        else if (guess < secret) {
            console.log("Too low! Try again.");
        } 
        else {
            console.log("Invalid input. Please enter a number.");
        }   

        if (isNaN(guess)) {
            console.log("Invalid input. Please enter a number.");
        }
        else if (guess === secret) {
            console.log("You guessed it right!");
        }
        else if (guess > secret) {
            console.log("Too high! Try again.");
        } 
        else if (guess < secret) {
            console.log("Too low! Try again.");
        }
        