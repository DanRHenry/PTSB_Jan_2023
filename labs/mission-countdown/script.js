// DOM Selector Section:
let startTimeout = document.getElementById("start-timeout");
let timeoutDisplay = document.getElementById("timeout-display");
let startInterval = document.getElementById("start-interval")
let intervalDisplay = document.getElementById("interval-display")

// Event Listeners
startTimeout.addEventListener("click", startTimeoutCB);
startInterval.addEventListener("click", startIntervalCB);

// Callback function to the 'start-timeout'
function startTimeoutCB() {

// textContent of our "timeout-display" changes to "Getting ready..."
    timeoutDisplay.textContent = ("Getting ready...")

// The first argument passed to setTimeout is a callback function that represents what happens once the timer expires.
// We want the timer to expire in 5 seconds which is the second argument passed to setTimeout. It should be passed in as miliseconds.
    setTimeout(expire, 5000)
}

function expire() {
// When the timer expires, we want the textContent of "timeout-display" to change to "READY"
    timeoutDisplay.textContent = ("READY")
}

function startIntervalCB() {
// The first thing that needs to happen is the creation of a count variable that starts at 5

// Then, create a variable to hold our setInterval timer.
// The first argument passed to setInterval is a callback function that represents what happens every time the delay or interval occurs.
    // let setIntTim = setInterval(intCB, 1000);
    setInterval(intCB, 1000);
}

let count = 5;
function intCB() {
//Inside of this callback function, we want the textContent of "interval-display" to decrement.
    
    // console.log("intCB")
    // console.log(count)
    // count = count -1;
// Set up an if statement to catch when count is less than 0.
    if (count > 0) {
        intervalDisplay.innerText = (count)
        count = count -1;
// Inside of this if statement, change the textContent to be "GO!"
        
// Inside of this if statement, utilize clearInterval and pass in the variable that holds the setInterval timer.

// The second argument passed to setInterval is the time in miliseconds we want the delay or interval to be. We want it to be 1 second.
    } else {
        intervalDisplay.innerText = ("GO!")
    }
}