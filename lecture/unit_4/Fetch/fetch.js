/* 
    ? API
    - Application Programming Interface
    - Wonderful way to access data we are trying to obtain
        - Data that is not in our local project.
        - Ex: data stored in database, cloud storage, or someone else's public database(via a public API)
    - Allows the Client (front end of the application, web page, program) to communicate with the/a server(database)
    - Allows HTTP requests and response lifecycle.
*/

/* 
    ? AJAX
    - Asynchronous JavaScript and XML
    - Might see if working with older code bases
    - Wrap XML with XMLHttpRequests -> not important to know right now
    - Governs different aspects of our page, such as static vs dynamic section of our page.
    Pros:
        - Page components loaded individually
        - New data updated regularly
    Cons:
        - JS must be enabled
        - Adds more complex aspects.
        - refreshes the page state and stores info can bloat.
        - Difficulty for screen readers.
    - Works through multiple technologies
        - HTML / CSS
        - DOM (Document Object Model)
        - JSON
        - Fetch
        - JS bringing it all together
    - Not Promised based.
    *jQuery
        - AJAX often works with it
        - A library that helps us handle the front end.
        - Prior to DOM and Fetch
        - still used but dated
    example:
        - timed updates to comments (replies)
        - infinite scrolling
        - dynamic search results
*/

/* 
    ? Fetch
    - Before fetch(), we would have had to use an httpRequest through the above noted system^

    - Is an API
    - A global method that requires one argument.
        - The location of the data (URL) we are trying to obtain
    - Handles both the request and response.
    - Returns a Promise
        - Allows us to access our resolvers (chain .then()/.catch())
        - Resolvers = okay, got the thing (or didn't), hey code, now perform this next action.

        https://developer.mozilla.org/en-US/docs/Web/API/fetch
https://www.w3schools.com/jsref/api_fetch.asp
*/

const log = console.log(); // Us creating a shortcut variable to hold the console.log functionality

// Store API URL in a global variable
const testEndpoint = `https://dog.ceo/api/breeds/image/random`; // Endpoints/Routes are how we reference a web address URL route/address, for example.

// console.log(testEndpoint)

// console.log(fetch(testEndpoint)); // Shows that fetch returns a promise, promise showed we got a success of 200

// Write a fetch: use the fetch global method & pass the url variable
fetch(testEndpoint)
    // .then((response) => console.log(response));
    .then((response) => {
        console.log("1st fetch:",response); // fetch the data
        return response; // returning the response for the next .then
    })
    .then((res) => {
        console.log("2nd fetch:",res.json) // 
        return res.json() //json-ify the response into something we can use and returning it.
    })
    .then((data) => {
        console.log("3rd fetch .then:", data); // logging the json object (now we can use it)
        seeDogPic(data);
    })

    /* 
        ? JSON (what we used above^)
        - JavaScript Object Notation
            - very lightweight way to store and transfer data
            - "Easy to understand/read" (for us humans)
            - Structured like an object
        
        Syntax & Structure
        {
            "key": "values",
            "key": "values",
            "key": 0
        }

        - Everything is wrapped in quotes with minor exceptions ( integers / booleans )
        - Data is all separated with commas
        - CANNOT hold comments or functions

        - .json() method helps to convert our promise response into something usable (object)
        */
let body = document.querySelector("body");

function seeDogPic(jsonDataFromFetch) {
    console.log("In seeDogPic",jsonDataFromFetch);

    // Create elements
    let img = document.createElement("img");

    // Assign img attributes
    img.src = jsonDataFromFetch.message;
    // Append
    body.appendChild(img)
}

// * JSON.parse(string)
let myText = '{ "name": "Gollum", "lost_ring": true }';
let testObj = JSON.parse(myText);
console.log(testObj.name);
console.log(testObj);

/* 
The Process:
        1. Fetch your resource which returns a promise
        2. Use a .then() resolver to catch fetches return and assign to a parameter.
        3. use .json() on response to finish reading entire ReadableStream.
        4. Chained another .then() to catch read response object and ..
        5. Build the rest as needed.
            - DOM manipulation
            - use data to process in other functions
            - whatever your project requires.
    Fetch differs from jQuery:
        - The promise returned won't reject on HTTP error status even even if its a 404 or 500 (internal / external server error)
*/

const url = "https://meowfacts.herokuapp.com/";

// An example of a fetch and a function

function getCatFact() {
    fetch(url)
        .then((r) => r.json())
        .then((d) => console.log(d.data[0]))
}

// getCatFact();

// Async/Await Fetch
const getCatFact2 = async () => {
    let res = await fetch(url);
    let result = await res.json();
    data = result.data[0];
    console.log(`In Async/Await:`, data);
}

getCatFact2(); // Prints fact to the console

/* 
? Local fetch to (local) json file
    - Project has the data we want to fetch from
*/

function fetchFellowship() {
    fetch("./local.json") // Passing our file location
        .then(res => res.json())
        .then(data => {
            let members = data.fellowship
            // used for/of loop to cycle through the array
            for (m of members) {
                console.log(m.name); // logs each member object
            }
        })
}
fetchFellowship()

//* Error Handling with try/catch
// Async/Await
async function getCatFact3() {
    try {
        // let response = fetch(url); // break to show catch
        let response = await fetch(url);
        let results = await response.json();
        let data = results.data[0];
        console.log("Try block of try/catch:", data);
    } catch(err) {
        console.error(err);
    }
}

getCatFact3();

//* Error handling with resolvers (.catch());

fetch(url)
    .then(r => r.json())
    .then(d => console.log("Fetch Resolver:", d.data[0]))
    .catch(err => console.error(err));