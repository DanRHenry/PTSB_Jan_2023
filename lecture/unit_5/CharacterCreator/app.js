// Require in and use the .env
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT; // Take the port # from the .env file.

// Controllers
const character = require("./controller/character.controller");

// Middleware

app.use(express.json());

// console.log(PORT);

// Routes
app.use("/characters", character);
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
