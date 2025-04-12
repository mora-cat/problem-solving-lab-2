/* LAB:
Part 1: Conditionals (in part1-conditionals.js)
1. Grade Checker 
let score = 82;
Print A, B, C, D, or F based on score */

// --------MINI LESSON 🤔------------- 

/* this variable holds the score we want to check: 82.
    _the word LET tells JS I'm declaring a variable.
    _the word SCORE is the name of my variable in this example.
    _VARIABLES can be named almost anything.
    _the EQUAL SIGN = assigns the VALUE 82 to the variable score, I can change the value to another number. FOR NOW EVERYTIME I USE SCORE IN MY CODE IT WILL REPRESENT THE VALUE 82 !!! But if i use a FUNCTION it will let me check ANY score.  */

/* HINT pay attention to the use of the ELSE in the last line:

            else {
            }

    the else {} block is used as a "default action" like saying if all other, or any other, conditions are false this is what happens. In this way you dont go writing tons of code for every thinkable occasion 😂😂😂    */

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

