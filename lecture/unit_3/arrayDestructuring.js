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