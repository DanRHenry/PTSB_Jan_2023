/*
! If Else Challenge 1:


    Bronze:
        Write an if else statement that checks your name;
        If it is your name, console log '<name>'
        If the name does not match, console.log 'Hello, what is your name?'
*/

let name = "Dan";
let newName = "Stan";
if (newName == name) {
    console.log(name)
} else {console.log("Hello, what is your name?")};

/*
        
    Silver:
        If It is your name, console log 'Hello, my name is <name>'
*/
name = "Dan";
newName = "Stan";
if (newName == name) {
    console.log(`Hello, my name is ${name}`)
} else {console.log("Hello, what is your name?")};        

/*
Gold:
        If it is not your name, console log 'Hello, is your name <name here> ?'
*/

name = "Dan";
newName = "Stan";
if (newName == name) {
    console.log(`Hello, my name is ${name}`)
} else {console.log(`Hello, is your name ${newName}?`)};        


/*
! If Else Challenge 2:

    Use this string: let name = 'sAmwISe';

    Bronze:
        Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
        If it is not console.log 'hey, this isn't written correctly'
*/
let name = 'sAmwISe';

if (name[0] == "S") {
    console.log(name);
} else {console.log("hey, this isn't written correctly")}

/*
    Silver:
        If the first letter of a string is uppercase, only console.log that letter
        if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
*/
let name = 'sAmwISe';

if (name[0] == "S") {
    console.log(name);
} else {console.log(name.toLowerCase())}
/*
    Gold:
        If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
        If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/
let name = 'sAmwISe';
let nameHolder = ""
for (let i = 1; i < name.length; i++)  {
        if (name[0] === name[0].toUpperCase) {
    nameHolder += name[i].toLowerCase()
} else {nameHolder += name[i].toLowerCase()}
}
console.log(name[0] + nameHolder);
/*
! Else If Challenge:

    Look up the format for an Else If statement.
    Set a variable of age and give it a number of your choice.

    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

/* 
!   Random Number Check If/Else Challenge:
    
*   Provided:
        - A variable called "num". This will generate a random number between 1 and 100.
        - A console log that displays the generated number to assess.
        - A variable holding the integer "100".

*   Your Challenge: 
    Write a conditional that checks to see if the random number created is even or odd.
        - If it is EVEN
            - Console log "An Even Number: [random number]"
            - create a variable that will store the value of that number divided by the oneHundred variable.
            - Console log "100 divided by [random number] is [value]."
        - If it is ODD
            - Console log "An Odd Number: [random number]"
            - create a variable that will store the difference of the oneHundred variable subtracting the random number.
            - Console log "100 minus [random number] is [value]."

*/

let num = Math.floor(Math.random() * 100 + 1);
console.log("The Random Number that was generated is: ", num);
let oneHundred = 100;

// Your Code Below
