/* 
    Let's build something cool!
    We will make a Spider Man battle program that randomly pits Spidy vs a foe.

    - Set Spidy's HP
    - Create a villain array of villain objects for Spidy to battle
    - Make something to randomly pick a villain
    - Use a do while loop to monitor if the villain's HP is above 0
    - In the while loop make attacks the effect HP of both Spidy and the Villain
        - Add some console.logs to give us messages throughout the battle
    - Create an ending message with a conditional on who won the battle
*/
let damage;
let spidyHP = 20;
let badGuys = [
    {
        baddie: "Green Goblin",
        hp: 15
    },
    {
        baddie: "Venom",
        hp: 25
    },
    {
        baddie: "Stilt-Man",
        hp: 5
    },
    {
        baddie: "Thug",
        hp: 0
    }
]
// Grab random villain from array
let rand = Math.floor(Math.random()* badGuys.length);
let villain = badGuys[rand];

// Message on who appeared
console.log(`${villain.baddie} has appeared and is up to no good!`);

do {
    // Take out the thug, asap
    if (villain.baddie == "Thug") {
        console.log("Spider-Man webs the thug...")
        break;
    }

    // Message & attack from villain
    damage = Math.floor(Math.random()*6);
    console.log(`${villain.baddie} hits Spider-Man for ${damage} damage!`);
    spidyHP-(damage)
    console.log("Spider-Man HP: ", spidyHP);

// Make spidy attack
    damage = Math.floor(Math.random()*6);
    console.log(`Spider-Man hits ${villain.baddie} for ${damage} damage!!!`);
// Conditionally print win or loss

// Villain HP math & message
damage = Math.floor(Math.random()*6);
villain.hp -= damage;
console.log(`${villain} HP: `, villain.hp);

    if (spidyHP === 0) {
        console.log("Oh, no, looks like Spidy's been knocked out!!!");
        break;
    }
}while (villain.hp >=0);

if (villain.hp <=0) {
    console.log(`Spider-Man has saved the day and captured ${villain.baddie}!`)
} else {
    console.log(`${villain.baddie} has taken down Spider-Man... who will save us now!?`);
}