/* 
?   Array Destructuring

    - Allows us to unpack values from arrays into distinct variables.
    - Similar syntax to array literals, but the square brackets are on the left side of the assignment operator (=).
    - Great way to pull info from the array and assign to its own variable.
*/

// W/O Destructuring
const fullName = ["Dan", "Henry"];
// let firstName = fullName[0];
// let lastName = fullName[1];
// console.log(firstName, lastName);

// W/ Destructuring
let [firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);
console.log(firstName, lastName);

//-------------------------------------------

/* 
?   Spread Operator

    - The spread operator basically pulls out the elements of an array as a standalone list of elements

    - Denoted by three consecutive periods: ...arrayName

*/

const myName = ["Dan", "Henry"];
const myFamily = ["Trey", "Dea"];
const myPets = ["Gloria", "Catalonia", "Salem"];


const copiedName = [...myName, ...myFamily, ...myPets];
const combinedNames = [...myName, ...myFamily, ...myPets];
console.log("Copied w/ spread operator: ", combinedNames);

const anotherCopy = [myName]; // This inserts the array as a whole
console.log("Copied w/o spread operator:", anotherCopy); // Copied w/o spread operator: [['Dan']]
console.log(anotherCopy[0][0])

// An Example with Numbers:

let numberArray = [];

for(let i = 0; i <=20; i++){
    numberArray.push(i);
    // console.log(numberArray);
}
console.log(numberArray)

const newNumberArray = [...numberArray]
console.log(newNumberArray);


// The spread operator "copied" the first state of my name, the copy did not update but the original can
myName.unshift("Mr")
console.log("My Name: ", myName); // My Name: [ 'Mr', 'Dan', 'Henry']
console.log(("Copied Name: ", copiedName)); // Copied Name: [ 'Dan', 'Henry']

// Math.min Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(1, 5, 13, -3));

const prices = [10.99, 5.99, 20, 3.99]; // NaN, can't perform Math.min on the array, itself.

console.log(Math.min(...prices)); // 3.99, spread operator was able to unpack the numerical values from the array to process with Math.min

// * Ex changing the original and copied array
const persons = [
    {
      name: "Jane",
      age: 28,
    },
    {
      name: "John",
      age: 35,
    },
  ];

  // Old way of copying persons:
//   const copiedPersons = persons.map((person) => ({
//     name: person.name,
//     age: person.age
//   }))

// Using spread operator:
const copiedPersons = [...persons];

// Test using push on persons array, does copiedPersons change?
persons.push({
    name: "Anna",
    age: 29
});

console.log("Persons Array: ", persons); // Includes Anna object in array
  console.log("Copied Persons Array: ", copiedPersons); // Copy does not include Anna. Created before Anna was added.

//* Variables within Memory
// First assignment/original assignment
let x = 10;
let y = "abc";
let z = null;

// Reassign to another variable
let a = x;
console.log(a); // 10
let b = y;
console.log(b); // abc

// Reassign a and b
a = 5;
b = "def";
console.log(x, y, a, b) // 10, abc, 5, def

// --------------------------------------

let arr = [];
arr.push(1);
console.log(`arr: ${arr}`);

let reference = [1];
let refCopy = reference;
console.log(`refCopy: ${refCopy}`);

console.log(reference, refCopy);

// reference = []
reference.push(2); // both reference and refCopy will have the 2 added
console.log(reference, refCopy); // [1, 2] [1, 2]

refCopy.push(3);
console.log(reference, refCopy);


//? Rest Syntax

/*

- Looks exactly like spread syntax: ...
- Spread -> "expands" an array
- Rest -> "condenses" an array


We can use the spread operator syntax, referred to as 'rest' syntax when working with array destructuring, to package up the REST of the values in the referenced array, and return them as their own array.

*/

const fullNameAgain = [
  "Jane",
  "Doe",
  "Mrs.",
  {
    month: 03,
    date: 22,
    year: 1973,
  },
  2,
  "test",
  "4",
  true,
  false,
];

let janesName = fullName[0];
// console.log(janesName);

// Using both array destructuring and rest:
let [newFirstName, newLastName, , ...otherInfo] = fullNameAgain;
console.log(`newFirstName: ${newFirstName}`);
console.log(`newLastName: ${newLastName}`);
console.log(`...otherInfo: ${otherInfo}`);