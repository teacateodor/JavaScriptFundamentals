// arrow function
let sum = (a, b) => a + b;

// function expression
let sum = function (a, b) {
    return a + b;
};

// if we have only one argument, then parentheses around parameters can be omitted
let double = n => n * 2;
let sayHi = () => alert("Hello!");

// arrow functions can be used in the same way as Function Expressions
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => alert('Hello') :
    () => alert("Greetings!");
welcome();

// multiple expressions or statements
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
};