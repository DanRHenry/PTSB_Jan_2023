// console.log("In dom.js file, linked via src in script tag");

/* 
    ? DOM
    - Document Object Model
      ^ Only through the browser
    
    Frame:
        - Document: HTML page
            - Is a global variable that we can access
        - Object: Elements(tags) and comments (nodes)
        - Model: Arrangement of the pieces that come together to create the webpage.

    - Data representation of objects that comprise the structure and content of a document on the web.

    Basic Structure: 
        - Document (index.html doctype)
            - HTML
                - Head
                    - Metadata
                    - Link
                    - Title
                - Body
                    - Nav
                    - Header
                    - Div
                    - And any of their attributes (nodes [class, id, style, src...])
    ? BOM
    - Browser Object Model
    - Window object/variable
    - Has various methods available to us.
*/

function askForStuff() {
    prompt();
};

// askForStuff();

// Document Variable: Global
console.log(document);
console.log(document.location);
console.log(document.title);
// Reassignment
document.title = "DOM Updated Lesson";

// ? Creating our first element
/* 
    Chain of events to add new element:
        1. Create our element (variable).
        2. Apply our values (reassigning values to property keys)
        3. Place our element (adding to the document body object)
*/

/* 
    Created a variable to store a newly made element.

    Our variable now has access to various properties:
        - innerHTML: can inject(we reassign) a block of HTML
        - innerText: returns the visible text.
        - textContent: returns the full text
        ex: 
            <p>Hello<b>World</b> </p>
            -innerText would return just "Hello"
            -textContent would return "Hello World"
        
*/

let h1 = document.createElement("h1");
// console.log(document.createElement("h1")); // Huge h1 object
h1.innerText = `Creating my first DOM element!`; // reassigning the innerText property of h1
console.log(h1);

/* 
    - Access global document variable, 
    - step into with dot notation the document body, 
    - use appendChild method to add new element/tag to our HTML body */
document.body.appendChild(h1);


// Altering the element via its properties
h1.style.color = "blue";
h1.style.textAlign = "center";
// We can also build a general CSS; however reassigning the style attribute to these new values
h1.style = `text-shadow: 2px 2px 2px yellow;
color: purple;
textAlign: center;`;
// We can do one off or multiple style attributes

//JS requires camelCasing as "class" is keyword that means something different

h1.className = "h1-class-name";
h1.id = "set-id";
// document.body.innerHTML = h1.innerText;

// ? Finding Elements

/* 
    HTMLCollection
        - An array-like object
        - Allows access to index, properties, and methods to help navigate and modify elements.
        - NOTE: Does NOT allow you to modify a group of elements, all at once.
        - Can loop through this
        - Can use .length property to get the size of the list (# of targeted elements)

    To Get Singular Element:
    - use array notation
    use .item() method

    Accessing Multiple Elements requires these methods:
    - .getElementsByTagName();
    - .querySelectorAll();
    - .getElementsByClassName();

*/

let li = document.getElementsByTagName("li");
console.log(li);

console.log(li[0]); // target single list tag

let bathroom = li[0];
bathroom.style.color = "red";
// li.style.color = "yellow"; cannot stet the color of an array, this is not targeting all items at once

// Because the method returns an array-like object, we can use array aspects/methods/tools
for (i of li) {
    console.log(i);
    i.style.color = "purple"
}

/* 
    * .querySelector()
        - Grabs the fist instance of an element or null, if nothing is found.
        - Can target by ID, Class(className), or Element
            - Will need to append # for ID
            - Will need to append . for Class
*/

// let firstLi = document.querySelector("li");
// console.log(firstLi);

let toDoList = document.querySelector("#listTitle");
toDoList.style.textAlign = "center";

let listItems = document.querySelector(".listItem");
listItems.style.textAlign = "center";

/* 
    * .querySelectorAll()
    - Returns a static nodeList (an Array) list of elements.
    * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');
console.log("querySelectorAll:", nodeListLi);
// console.log(nodeListLi[0]);

//* Static Example
let newListItem = document.createElement('li');
// Target our ul
let ul = document.getElementById("ulToDo");
console.log(ul);

newListItem.className = "listItem"
newListItem.innerText = "New Item Test";
// Styling or any other attributes are not set to this "new element" that was created
ul.appendChild(newListItem);

// We can see how the other li elements are different via the console.
console.log(li);

// .getElementsByClassName()
let liClass = document.getElementsByClassName('listItem');
console.log("\n------------------------------------\n");
console.log("ByClassName: ", liClass);

// ? Event Listeners

/* 
    Allow us to execute a function when an event occurs. 
    .addEventListener()
        - DOM node method
        - requires an event to "listen" for or type and a callback function
*/
let btn = document.getElementById('submit'); // "Grabs"/creates reference to the button w/ id "submit"
// If we wanted to see all node/element properties available to us:
let btnNode = document.getElementsByTagName('button');
// console.log(btnNode);

//? Directly adding and testing the event listener method:
// btn.addEventListener("click", (event) => {
//     console.log(event);
//     console.log("I clicked the button!");
// })

/* 
    Goal: have the input text be added to the list on the page.

    Steps for adding an item to the list.
        - Capture the input value from the HTML
        - Use the button and click (pass/capture that input value)
        - Create a new element (li)
        - Assign values to new element (attributes)
            - new li gets class (className)
            - assign innerText to the input value
        - Append the new element to the parent element/node/box

    Functionality Step:
        - add event listener to the button
        - use variables to contain the HTML tags we're referencing (document.getElementById)
        - build function that creates and assigns attribute for the new li element
*/

// Add click event to the button
btn.addEventListener("click", addItem);

let input = document.getElementById("listInput")
let inputNode = document.getElementsByTagName("input");
// console.log(inputNode) to know how to grab the values

// Build our function: use declarative format, name it addItem, no params
function addItem () {
    // Capture our value from the input: .value property
    // Targeting the input node via the variable name and whatever information is being stored in the value property.
    console.log(input.value)

    // Create a new li element
    let newItem = document.createElement('li');

    // Assign our property values
    newItem.className = "listItem";
    newItem.textContent = input.value;

    // Append new element to the parent element
    ul.appendChild(newItem);

    // Reset input to blank
    input.value = "";
}
// Creating something NEW!

// Global Variables: build button, parent container, mock "faux" data

let buildBtn = document.getElementById("table-btn");
let parentShellDiv = document.getElementById("shell-div");
// mock data
const myList = [
    'red', 'blue', 'green', 'purple', 'yellow', 'orange'
];

// Event listener with the button
buildBtn.addEventListener("click", buildTable)

// Build a function to create everything, create/build all elements and display them.
function buildTable() {
    // testing function with event listener: it worked!
    // console.log("Running buildTable function on button click!");

    // Perform/create something for each item of the array
    // Use the forEach method to create a div, title, and p tag for each item

    myList.forEach((color, i) => {
        // test w/ a console.log
        console.log(color, i);

        //* Create elements
        let div = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");

        //* Assign attributes to the new element (give the content of each element)
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `Item <u><b>${i}</b></u> in my list.`

        // Add styling to the div containers
        div.style = `
            border: 3px solid ${color};
            padding: 10px;
            border-radius: 1em;
        `
        //* Append to the parent container/element, think of "nesting dolls"
        // Add h2 and p tag to div
        div.appendChild(h2);
        div.appendChild(p);

        // Add the div
        parentShellDiv.appendChild(div);
    });

    parentShellDiv.style = `
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: space-evenly;
    `;
}