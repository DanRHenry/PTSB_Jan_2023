// Debug this later...

/* 
    * Let's build a dice game!
    - User plays the dice game, rolls dice up to 3 times, and I want to focus on scoring per dice roll and totaling the score at the end of the game.

    To Do List
    // - tell JS what things are with variables
        - score
        - diceRollValue
        - the state of the dice (rolled or not rolled)
        - numberOfRolls (eventually set a max of three)
    // - Use dictionary/object/lookup table to store our scoring values
    // - Use a state/ a state machine to check which action options the player has:
        not rolled, roll, score (ending the game and printing final total)
    - Build a function to update the player's score
    - Build a function that gives a randomized die value and update the roll count
    - Build a function that can monitor/check our turn/action state
        1. Check if action/next action is valid (can we do this?) - IF ELSE
        2. If the die is rolled: 
            - first, check if not at max rolling count of 3 - CONDITIONAL
            - if we are still under 3, then we can roll the die 
            - total and set score, - REASSIGN SCORE
            - make a console message to see the changes.
        3. If die is to be scored (CONDITIONAL):
            - print a message with the player's final score
            - reset our starting values/reset the game (REASSIGN VARIABLES)
*/

//* Creating my variables
let score = 0; // default starting score for the game
let dieRollValue; // the variable to hold our roll value, the side we landed on
let stateOfDie = "not rolled"; // current state of our die
let numberOfRolls = 0; // starting count for our allowed rolls (1-3)

// * Use a dictionary to store score values
// 1 = 100, 2 = 20, 3 = 30, etc.
const scoring = {
    1: 100,
    2: 20,
    3: 30,
    4: 40,
    5: 50,
    7: 60
}

//* State of player's turn:
// 3 states: "roll", "not rolled", "score"

let dieState = {
    notRolled: ["roll"],
    roll: ["roll", "score"],
    score: ["notRolled"],
}

let currentState = "notRolled";

/*
From notes
function enterState(newState) {
    // Create a check to see what values are valid and available
    // Establish which point in our state object that we want to reference
    let validTransitions = state[currentState];
    console.log(`\nThe light is currently: `, currentState);
    // check if our key includes the state the user wants to transition/change to.
    if (validTransitions.includes(newState)) {
        // Allow our state to change if true to next state
        currentState = newState;
        return `The light turns ${currentState}`;
    } else {
        // Have a message if state is not available
        // console.log("Invalid State!");
        throw `Invalid State ${currentState} to ${newState}`;
    }
}
*/

// Make a function to update our score as well as print a message (console.log) to give us feedback.
function scoreDice(dict, dieSide) {
        // Create some math to add new roll score value to our base score variable

        // Console.log a message of where score is

    score += dict[dieSide];
    console.log(`You rolled, and your new score is ${score}`);
}

// Test if scoreDice works
scoreDice(scoring, 5);
scoreDice(scoring, 3);

// Build a function that will generate a random number limited by 6 (using a d6) and increase our roll count variable numberOfRolls (reassignment)
// Just picks which side we land on and adds to roll count #
function rollDie() {
    // Generate a random number that is less than (or equal to) 6
    dieRollValue = Math.floor(Math.random()*6 +1);
    console.log("Die face:",dieRollValue); // testing
    numberOfRolls++;
    console.log(numberOfRolls) // testing
}

// Testing function, IT WORKS!
// rollDie();
// rollDie();
// rollDie();

// Build a function to pull in our state/action change, check it, and run the rest of our conditionals
function playState(newDieState) {
    // Reference/find my starting state
    // Game default start is "not rolled", but need variables that will be updated as player "roll"s, and want to check if action is allowed.
    let validDieState = dieState[stateOfDie];

    // Using a conditional, to check if die action
    if (validDieState.includes(newDieState)) {
        // set our newDieState
        stateOfDie = newDieState;

        // If the state of die is "roll", do the following:
        if(stateOfDie === "roll") {
            // First check to make sure we aren't at max # of rolls
            if(numberOfRolls === 3) {
                console.log(`Hey! You've rolled ${numberOfRolls} times and need to score! This roll won't count.`)
            } else {
                // If we haven't hit max rolls, roll the dice and send a message to the player
                rollDie(); // will get a random value (side 1-6) and increase # of rolls

                // Write message
                console.log(`You rolled a ${dieRollValue}! Would you like to roll again, or finalize the score?`)

                // Score the rolled dice and print a message of rolls made?
                scoreDice(scoring, dieRollValue);
                console.log(`You have rolled ${numberOfRolls} time(s).`)
            }
        }
        // If the state of die is "score" do the following:
        if (stateOfDie === "score") {
            // Reset all values, print final score message
            console.log(`Your final score is: ${score}. Thanks for playing!`);
            dieRollValue = "not rolled";
            numberOfRolls = 0;
            score = 0;
        }

    } else {
        console.error(`Invalid move! Cannot ${newDieState} after ${validDieState}`)
    }
}

// function roundTwo() {
//   console.log("\n\n------ Welcome to Dice Game, Round Two! ------\n");
//   playState("roll");
//   playState("roll");
//   playState("roll");
//   playState("score");
//   console.log("\n------ End of Round two, thanks for playing! ------\n");
// }

// roundTwo();

playState("roll");