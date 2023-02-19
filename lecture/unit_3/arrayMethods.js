// ? Array Methods, awesome ways to do things with or to arrays

let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Hotdog"]

// for (item of food) {
//     console.log(item)
// }

// * .push(), adds item(s) to the end of an array
food.push("Pizza");
console.log("Push method: ", food);
console.log(food[4]); // Pizza

//* .splice()

//* .splice(), splice(indices of where to remove, how many to remove, what to replace with / add)
food.splice(1, 1, "Tacos") // start at position 1, delete one item, add "Tacos"
console.log("Splice method: ", food);

food.splice(1, 0, "Steak");// doesn't remove anything. Only adds "Steak"
console.log("Splice method2: ", food);

// food.splice(1, 1000000, "Steak"); // Removes everything after index 1 and doesn't break when it runs out.
// console.log("Splice method2: ", food);

//* 

food.pop();
console.log("Pop method: ", food);

//* .shift(), removes the first value of an array (value in the first position)
food.shift();
console.log("Shift method: ", food);

//* .unshift(), adds to the front of an array, can include multiple items
food.unshift("cake", "sushi", "roti");
console.log("Unshift method", food);

// .length, property not method
console.log(food.length);

//* .toString(), returns a string representation of the array

let rgb = ["red","green","blue"];
console.log("ToString Method: ", rgb.toString());

//? Iteration Methods

/* 
?    .filter() & .includes()
    - does not destroy the original array
    - we typically store the filter array in a new variable
    - takes a callback function that returns either true or false
        - A callback function is another function that we invoke within our main function (nested function)
    - loops through array
    - must have a return
*/

let fruits = ["Kumquat", "Banana", "Peach", "Kiwi", "Papaya", "Mango"];
// Use filter to remove peach

// let filteredFruits = fruits.filter(fruit => {
//     let remainingFruit = fruit !== "Peach";
//     console.log(`Remaining fruit: ${remainingFruit}`);
//     return remainingFruit;
// });

// console.log(filteredFruits);

// .includes(), remove any fruit that starts with "P"
let otherFruit = "Pineapple";
// console.log("Includes: ", fruits.includes("P")) // False .includes done on one item at a time (single value at a time)
console.log("Includes method: ", otherFruit.includes("P"));
console.log("Includes method: ", otherFruit.includes("apple"));

// .filter with .includes, remove any fruit with "P"

const filterFruit2 = fruits.filter((item) => !item.includes("P"));
console.log(filterFruit2);

// set the filtered array to variable, filter will run eatMango function per item in array
const filteredFruitFunctionEx = fruits.filter(eatMango);

// returns true if not mango, false if mango
function eatMango(fruit) {
    return fruit !== "Mango"
}

// All that ^^ is the same as:
// finish later...


// printing to see final filtered array
console.log(eatMango("Mango"));

console.log("Filter with function ex: ", filteredFruitFunctionEx);

//-----------------------------------------------------------------

//? .forEach()
/* 
    - The Value
    - The index
    - The array object itself

- forEach() helps us iterate over an array performing a function once per element in the array via a callback function.
- Is not executed for empty elements
- Does not change the original array
*/

let newFoodList = ["apple", "pear", "mushrooms", "cheese", "spaghetti"];

// for (let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }

// newFoodList.forEach((item) => console.log("forEach Method: ", item));

// newFoodList.forEach((item, i) => {
//     console.log("forEach with Index: ", i+1, item);
// })

newFoodList.forEach(function (item) {
    console.log("Declaration sample: ", item)
})

// Build a function to console.log item
// Separating function from forEach, works
function displayFoodItem(foodThing) {
    console.log(`Function outside of forEach: ${foodThing}`);
}

//function call
//displayFoodItem("potato")

// Pass our forEach the function
newFoodList.forEach(displayFoodItem);

//--------------------------------------------------
//? .map()

/*
    - Creates a new array from calling a function for every array element
    - Calls the function once per element in an array
    - Does not execute the function for empty elements
    - Does not change the original array
*/

// Populated by for loop
let numArray = [];

// Populate by using .map on numArray
let fizzBuzzArray = [];

for (let k = 0; k <=25; k++) {
    numArray.push(k);
}
// Checking if numArray is populated
// console.log(numArray)

// Simple ex first
// numArray.map((x) => fizzBuzzArray.push(x));
// numArray.map((x) => fizzBuzzArray.push(x + 5));

// If %3, print fizz, if %5, print buzz, if %3 and %5, print fizzbuzz (push to fizzBuzz array)
numArray.map((x) => {
    // conditional to check division
    if (x % 15 === 0) {
        fizzBuzzArray.push(x)
    } else if (x % 3 === 0) {
        fizzBuzzArray.push("Fizz")
    } else if (x % 5 === 0) {
        fizzBuzzArray.push("Buzz")
    }
})

// Check if fizzBuzzArray is populated
console.log("fizzBuzzArray: ",fizzBuzzArray)

// ? ------------ map vs forEach example -------------

let mainArr = [1, 2, 3, 4];

// .forEach does NOT return anything, performans an action on each item, but does not return a value
let forEach = mainArr.forEach((i) => i);
console.log("forEach Example: ", forEach);

// .map returns a new array, performs an action and creates/returns new value
let mapEx = mainArr.map((i) => i);
console.log("Map Example: ", mapEx);

let secondMap = mapEx.map((i) => i+5);
console.log("secondMap Example:", secondMap);
// mapEx = mapEx.map((i) => i+5);
// console.log("Changed Map Example:", mapEx);

console.log("Map Example: ", mapEx);

let tmnt = ["Mikey", "Donnie", "Leo", "Raph", "Splinter", "Shredder", "Baxter"];

let character = "Leo";
console.log(
    "Find Ex 1: ",
    tmnt.find((c) => c === character)
);
character = "April";
console.log(
    "Find Ex 2: ",
    tmnt.find((c) => c === character)
);
character = "Splinter"; // find will return true for splinter versus the value splinter because we checked all items including the index
console.log(
    "Find Ex 3: ",
    tmnt.find((c, i) => console.log(
        "Character: ",
        c === character,
    "Index",
    i)
))
;
