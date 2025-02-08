/* 
? Async/Await
    - Introduced in ES8 in 2017
    - Can make any function async simply by denoting (naming) it as such

    Keywords:
        - async, denotes a function to be async
        - await, calls a process to "wait" for our results

        - Can help us reduce the need for callback functions!
        - CANNOT be used in loops!
        - ALWAYS returns a promise. This is why we use .then, .catch...
*/

// Example Structure / Syntax
// Async Function Declaration (declarative style)
async function asyncFuncName() {
    // ...code to run
}

// Async Function Expression
let funExpressName = async function () {
    // ...code to execute
}

// Async Arrow Function
let arrowFuncName = async() => {
    // ...codeBlock
}

// --------------------------------------
// * Because async functions ALWAYS return a promise, we can use promise resolvers! (.then(), .catch());

async function getName() {
    return "Gandalf the Grey";
}

// console.log(getName()); // Promise { 'Gandalf the Grey' }
// .then(): a method that attaches a callback function for the resolution of the promise.
getName().then(data => console.log(data)); // data is the argument passed into the parameter of the callback function in the .then

/* 
? Await
- Tells JS that a promise is being returned and to wait on that result.
*/

async function extraData() {
    // let info = returnData(); // ran so quickly it printed/returned [object Promise]
    let info = await returnData();
    return `${info} stored in some cloud... or API`
}

extraData().then((data) =>
    console.log(`Line 50 return of asyncAwait.js:`,data)
)