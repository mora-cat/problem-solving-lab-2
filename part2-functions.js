//  Part 2: Functions (in part2-functions.js)

//  I'm using console.log("-------------"); to add a line to separate the output of the different functions.
//  With cursor in the terminal, hit the up arrow to retype the node command to run the file again.

//  *** 3 steps to writing a function (for now?) ***

//      STEP 1. Declare the function:
//      -write the word FUNCTION followed by the name you choose for it.
//      -declaring the function tells JS that you are making a reusable block of code.

//      STEP 2. Set up the function's parameters:
//      -right after the function name, add a parenthesis () 
//      -inside the parenthesis, write the name(s) of your parameter(s). 
//      -The parameters are placeholders for the values you'll  use later when you run the function. 

//      STEP 3. Write the function body:
//      -the body is everything that goes inside the curly {} braces. 
//      -Inside the {} write the code that does the job.
// This is the place where you write out the function to get the answer. 
//      -Also how you want it, print on a console.log or a return. 
//      -RETURN a result is better -it makes the function more powerful and flexible because you can use the value in other places.


// ------------------------------------------------------
//
//      📌  1. Dog Age Converter

//      function dogToHumanYears(dogAge) {
  
//      }

//      Here 1 dog year = 7 human years 
//      so the function is to multiply the 
//      variable dogAge by 7 to get the dog's age 
//      in human years.
//      Use template literals for cleaner code, check syntax!

function dogToHumanYears(dogAge) {
    let humanAge = dogAge * 7;
    console.log(`Your dog is ${humanAge} in human years.`);
}

// to run the function, add a value to the variable, here are 3 different values for the dogs ages in dogs years:

dogToHumanYears(3);
dogToHumanYears(10);
dogToHumanYears(1);

console.log("-------------"); //just to add a line
// ---------------------------------------------------------
//
//      📌  2. Tip Calculator
//
//      function calculateTip(total, percentage) {
//  
//      }
//
//      If your bill is $50 and you want to tip 20%, then:
//          Tip = 50 x (20/100) =10
//
//     -i'm writing the function 2 ways: first, using console.log; then using return. Also using 3 different percentages (20%, 15%, 10%). And tip result set to 2 decimal points.
//      -Because in a JS file you cant name a function with the same name used before I used the name calculateTipReturn

//  calculateTip function using console.log inside the function body {}:

function calculateTip(total, percentage){
   let tip = total * (percentage / 100);
   console.log(`You should tip $${tip.toFixed(2)}.`); 
}

calculateTip(50,20);
calculateTip(50,15);
calculateTip(50,10);

console.log("-------------"); //just to add a line

//  calculateTipReturn function using return inside the body {}:

function calculateTipReturn(total,percentage){
    let tip = total * (percentage / 100);
    return tip;
}
 // here tipAmount is the new variable that saves the result of return tip, so it can be used later on. Console.log looses the data because it is only temporary.
 // BEWARE use 'let' only once, otherwise block error

// tip for 20%
let tipAmount = calculateTipReturn(50, 20);
console.log(`The tip is $${tipAmount.toFixed(2)}.`);

// tip for 15%
tipAmount = calculateTipReturn(50, 15);
console.log(`The tip is $${tipAmount.toFixed(2)}.`);

// tip for 10%
tipAmount = calculateTipReturn(50, 10);
console.log(`The tip is $${tipAmount.toFixed(2)}.`);

console.log("-------------"); //just to add a line

// ---------------------------------------------------------
//
//      📌  3. 3. Even or Odd
//
//      function checkEvenOdd(num) {
//      }
//
//      -To check if a number is even or odd Use the modulo operator % for division remainder
//      -If the remainder of a number divided by 2 is exactly zero, the number is even.
//      -Use the comparison operator === for equal value and equal type

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd.`);
    }
}

checkEvenOdd(11);
checkEvenOdd(6);
checkEvenOdd(37);

console.log("-------------"); //just to add a line
