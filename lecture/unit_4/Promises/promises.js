/* 
? Promises
    An object that may produce a singular value in the future.
    A promise allows us to "wait" for our results (regardless if we get a positive response or negative rejection.)

    3 states:
        - Pending, ... in the process of getting the result
        - Fulfilled, ...yay, we successfully got the result!
        - Rejected, ...boo, we were not able to get the result.

    - Always returns an object { }

    - Promises take in two parameters:

    https://www.w3schools.com/js/js_promise.asp
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

// Mock/Faux Internet send
// function getData() {
//     setTimeout(() => {
//         return "Here's some faux data!"
//     }, 3000);
// }

// let data = getData();
// console.log(data);

// Use Callback - callback functions get executed after the end of a process
function getData(cb) {
    setTimeout(() => {
        cb("some data to hopefully be delivered")
    }, 3000);
}

// getData(data => console.log(data));
// console.log("Wow, the compiler runs fast!");

/*
    How we can make our program wait for data instead of giving us undefined results:

    * A promise is an object that may produce a singular value in the future.
    - Resolved: If we obtain our data, we can resolve and use it.
    - Rejected: If we get nothing, we can handle it with reject.
*/

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve("Some data from resolved promise!")
            } else {
                reject("This is a rejection")
            }
        }, 3000);
    })
}

console.log(returnData()); // Promise { <pending> }

/* 
? Resolvers
    - When returned, the returnData() func. will return/give a Promise instead of a given string.
    - Chaining with a resolver
        - Keywords:
            - .then()
                If success "then" do this
                Can be chained together, do multiple things.

*/