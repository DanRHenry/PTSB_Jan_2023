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