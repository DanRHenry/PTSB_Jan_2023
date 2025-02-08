//? Todo: Write our Global Variables
// variable to connect to the form & one to connect to the table body, something to hold all the animal data (array)

const form = document.querySelector("form");
const table = document.querySelector("tbody");

// Will make array later
let animals = [];
// console.log(form);
// console.log(form.name);
// console.log(Object.values(form))
console.log(form[0].placeholder) // hits the first input in the form with [] and used dot notation to look at the placeholder we set (hint: can find other values of the input)
// Todo: Create an event listener for form
// Event Listener: something to listen for, when heard do the thing (something for it to do/trigger)

form.addEventListener("submit", e => {
    // We need something to stop the browser from refreshing the page.
    e.preventDefault();
//   console.log(event);
//   console.log("I submitted the form!");
// Create an animal data collection from the input values
const animal = {
    species: form.species.value,
    name: form.name.value,
    sex: form.sex.value
}

// Testing if it's working: it does!
// console.log(animal)

// Add animal to animals array with .push
animals.push(animal);
// console.log(animals);
// Two new window methods: 
form.reset(); // points to our form and clear it.
form[0].focus(); // focus will target the first input within the form, "start" when the form is "new";
// Also could be written
// form.species.focus();
displayTable(); // Calling the function in the event so each animal gets displayed when it's added.
});
// Todo: Display to the table body (function)
function displayTable() {
    console.log(`displayTable: `, animals);

// Use a while loop (this will be hecka helpful later, so remember this section)

/* 
    While the table body has a child in the first position (if it has anything in it/appended):
    - use the method removeChild on tbody
    - .removeChild() requires details on which element to remove
        - the first child needs to be removed.
*/
while(table.firstChild) {
    table.removeChild(table.firstChild);
}

// Use a .forEach loop to create the needed table elements per animal, assign values, and then append to the page.
// Each row: an ID (#), the name, the sex, the species
animals.forEach((a, i) => {
    console.log("In forEach loop:", i, a)

    // Create elements:
let tr = document.createElement("tr"); // this will be parent element for our "td"
// Using names of what type of data will be in each "td" for clarity
let id = document.createElement("td");
let name = document.createElement("td"); 
let sex = document.createElement("td"); 
let species = document.createElement("td"); 
    // Assign elements values:
    id.textContent = i++ // Using the index position in array and adding 1 to become the ID
    name.textContent = a.name;
    sex.textContent = a.sex;
    species.textContent = a.species;
    // Append elements to DOM / Parent
    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(sex);
    tr.appendChild(species);
    table.appendChild(tr);
})
}