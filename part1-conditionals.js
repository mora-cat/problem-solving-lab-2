// WEEK 4 JAVASCRIPT LAB 2:
// ---Part 1: Conditionals (in part1-conditionals.js) ---
//
//      1. GRADE CHECKER
//      let score = 82;
//      Print A, B, C, D, or F based on score */
//
// --------🐦 CONDITIONALS MINI LESSON 🐦------------- 
//
/* this variable holds the score we want to check: 82.
    _the word LET tells JS I'm declaring a variable.
    _the word SCORE is the name of my variable in this example.
    _VARIABLES can be named almost anything.
    _the EQUAL SIGN = assigns the VALUE 82 to the variable score, I can change the value to another number. FOR NOW EVERY TIME I USE SCORE IN MY CODE IT WILL REPRESENT THE VALUE 82 !!! But if i use a FUNCTION it will let 
    me check ANY score.  */

/* 🐞 HINT pay attention to the use of the ELSE in the last line:

            else {
            }

    this EMPTY else {}, because it has no variable name with a value,  is used as a "default action" like saying if all other, or any other, conditions are false this is what happens, in this example you get an F grade. In this way you don't go writing tons of code for every thinkable occasion 😂😂😂    */

    //------------------🌻 END 🌻-----------------------

// 📌   1. GRADE CHECKER
//      let score = 82;
//      Print A, B, C, D, or F based on score

let score = 82; 
if (score >= 90) {
    console.log("A"); 
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
    // this ELSE {} empty, means if score is not A,B,C,D, then it is F.
}

    //  ------------------------------------------------

// 📌   2. Pizza Quantity Warning 
//      let quantity = 12;
//      Print warning if quantity > 10

let quantity = 12;
if (quantity > 10){
    console.log("Warning, there are more than 10 pizzas now");
} else {
     console.log ("All good, pizza quantity 10 or less");
}
   
    //  ------------------------------------------------
    
// 📌   3. Login Simulator
//      let password = "letmein"; // or use prompt
//      Print "Access granted" or "Access denied"

let password = "letmein";
if (password === "letmein"){
    console.log("Access granted");
} else {
    console.log("Access denied");
}

