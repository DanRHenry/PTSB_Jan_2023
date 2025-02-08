let computerResponse = document.getElementById("computer-response")
let nameForm = document.getElementById("name-form")
let userInput = document.getElementById("user-input")


function greeter(name) {
    if (name == 'darth vader' || name == 'lex luthor') {
        console.log("Go Away!")
    } else {
        console.log("Hello, ", name);
    }
}

// greeter("Luke Skywalker");
// greeter("darth vader");
// greeter("lex luthor");

// nameForm.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

nameForm.addEventListener("submit", event);
function event() {
    event.preventDefault();
}

let input = userInput.nodeValue;
let enemyNames = ["darth vader", "lex luthor"];

if (enemyNames.includes(input)) {
    computerResponse.textContent = ("Go away!")
} else {
    computerResponse.textContent = (`Hello, ${input}!`)
}