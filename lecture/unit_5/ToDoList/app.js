//! Access Express & its methods; we can do that via require()
const express = require("express"); // being pulled from the node modules
// We want a simple var to make calls, set express to app
const app = express(); // simplifies our method calls
// Create a PORT number to run the app/server on our local machine
// Server port w/in localhost. Using "all caps" indicates a "general" variable.
const PORT = 4000;

//! --------------------- Required File Paths ---------------------

const practiceController = require(`./controller/practice.controller`);
// Importing in the auth controller routes for the app's use/reference
const auth = require("./controller/auth.controller");

const routes = require("./controller/routes.controller")
// Require in the index.js from helpers(./helpers) w/object destructuring
const { logTime } = require('./helpers');

// Create a variable to require in and have CORS dependency accessible.
const cors = require("cors");

//! ------------- App Functionality/ What it does next
// Telling the express app to first use this middleware function
app.use(logTime);

// Provide us access to use JSON within our routes
// call on our app var, use the .use() method to tell our app: express.json() (use JSON please express)
app.use(express.json());

// parses the body (of the request) from our browser so it can display the response.
app.use(express.urlencoded());

// Runs the cors preflight request prior to hitting our endpoint/routes
// Allows all CORS requests (*)
app.use(cors());

// Use a method called .use(), this points our express app to where it should go.
// Call the app variable, use the .use() method, specify using express to target the public folder, note: when a file is not specified, JS always defaults to seeking an index file (any file titled index, if it's not provided one).
//__dirname comes from node (it's accessible whenever)
app.use(express.static(`${__dirname}/public`));
console.log('pathway: ', __dirname); // routes us to the public folder.

// Building route to practice controller (gives app.js access to it)
// First we will call on our app var, then we will use the .use() method, we pass use a string that becomes the url route and the controller that route takes you to.

/* 
    Any traffic coming in that has "practice" after localhost:4000 will route to practicecontroller.js.
    ex: localhost:4000/practice
*/
app.use("/practice", practiceController);

//! Building route to auth controller: http://localhost:4000/todo
app.use("/todo", auth);

//! Route to routes controller: http://localhost:4000/routes
app.use("/routes", routes);


// Create a method that "listens" for us spinning up/starting our application.
// This will need our PORT # and a callback function
// First call our app var, use the .listen method, pass that method the port var and create a CB func to give us some feedback (console.log) to affirm that it's running.
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

// To start server, in terminal at the project directory(the folder) run command "nodemon"