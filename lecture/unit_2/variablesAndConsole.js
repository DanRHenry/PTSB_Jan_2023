/* 
    A comment block in JS:
        Windows: alt + shift + a
        Mac: option + shift + a
*/

/* 
    Variables:
        - How we give the app/program/computer data (a thing we want the computer to know)
        - A declaration that stores data/data values

        Variables are declared with JS keywords:
            - var, old and not often used (prone to mistakes)
            - let, can reassign the variable's value
            - const, cannot reassign a value to a const declared variable
            - undeclared / no keyword: works, but don't do it.
*/

let a = 100;
let streetAddress = "666 Mockingbird Ln";

// 1     2    3     4
  let    v    =     1;

/* 
    1. JavaScript Keyword to denote the creation of a variable
    2. Name of the variable.
        - Developers refer to and use the variable name to grab the data stored.
        - Try to keep variable names pertaining to the data, if possible.
    3. Assignment operator(fancy tech/math for the equal sign)
    4. The initial value/data value
*/

// Variable Declaration
let x;
let y;

// Variable Initialization
let z = 10; // Anything on the right side of the = (been given a value)

let first = `Dan`;
let last = `Henry`;

let fullName = first+" "+last;

console.log(fullName);

console.log("Declaration: ", x); // Declaration: Undefined

x = 13; // Assigned our variable x a value for the first time.
console.log('Initialization 1: ', x);

x = 42; // Reassigned the value of x
console.log('Initialization 2: ', x);

let hi = "hello";
console.log("Both variables: ", x, hi);

// Let vs Const in action
// const is "new" in ES6: declare variables meant to remain unchanged

let today = "Great!";
const javaScript = "Awesome!";
console.log(today, javaScript);

today = "Lovely";
// javaScript = "Super!"; // When we try to reassign a const variable, we get a TypeError
console.log(today, javaScript);

console.warn("This is your first warning!");

let warning = "Uh oh, we've been warned.";
console.warn(warning);

let err = "This looks real bad and scary...";
console.error("Error: ", err);
