/* 
    ? Classes

    - Introduced in 2015
    - A function that helps/allows us to create a specific object(s)
    - We use classes to define a category/set of objects ();

    Base Structure:
    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }
        methodName() {
            ... code block to run/execute
        }
    }
*/

// Ex: Create an item class to define things sold in a store

//1    2
class Item {
//       3                4
    constructor(name, description, price) {
//       5    6      7
        this.name = name;
        this.description = description;
        this.price = price
    }
}

/* 
    1. Class keyword that denotes (tell JS) what "type" of function we are building.
    2. Name of the class. Note that class names are done in Pascal casing to help determine what type of function we are referencing later in our code.
    3. Constructor keyword. This is activated when we instantiate a new object. Builds what sort of keys and values will be associated with our new object.
    4. The parameters of our constructed object. Establishes the values of our new object.
    5. "This" keyword - refers to "this" specific object being created.
    6. The name of a key to our new object. (In this ex, an Item object will have 3 keys: name, description, and price)
    7. The value for those keys (referenced by the parameters)
*/

// Ex: Create a class called NewObject & Instantiate/Create an object off the class.

class NewObject {
    constructor () {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
// console.log(one);
one.name = "sample";
// console.log(one);

// Instantiate/Create an object off of class Item w/ and w/o values:

let itemZero = new Item();
console.log(itemZero); // returns an object with the Item keys that hold undefined values

let itemOne = new Item("beans", "canned", 0.99);
console.log(itemOne);
// Change thing in itemOne;
itemOne.name = "spinach";
console.log(itemOne);

let itemTwo = itemOne;
itemTwo.name = "fish";
console.log("itemTwo: ",itemTwo);
console.log("itemOne: ", itemOne); // Like before, linking the two and then changing one changed both. Best create a new class.
// TypeError: Class constructor Item cannot be invoked without 'new'
// let brokenItem = Item();
// console.log(brokenItem); 

//? Factory Functions
// Using a function to handle the object creation.

let iType = "tomato soup";
let iDesc = "canned";
let iCost = 1.29;

let variable = ["squash", "broccoli", "papaya"]

// Build a function to process items.
function processItem(variable, itemName, desc, cost) {
    return new variable(itemName, desc, cost);
}

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);
