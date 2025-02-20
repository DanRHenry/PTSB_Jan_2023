const router = require('express').Router();
// Access our "db" by requiring it in
const db = require('../helpers/db.json');
// FS library pulled from NODE. This allows us to manipulate files.

//! Extra information
// https://www.tutorialsteacher.com/nodejs/nodejs-file-system
// https://nodejs.org/api/fs.html

const fs = require('fs');


/* 
    What Parameters are for:
        - Search parameters
        - To help us target a specific set of data so that we can find one to update or delete.
*/
// To do: build a route to GET one item from the "db"
/* 
    Syntax:
        URL:    /:id
        - the : denotes a parameter value. The endpoint is thus expecting a reference value (to take in a value).
        Ex: /3 then id = 3

        example URL w/ a parameter:
            http://localhost:4000/routes/1
        
        - "1" would reference a parameter or flexible string reference
            - This could be a name of something or anything we want
            - It all depends on how we build our logic.

        IDs: usually a db will create an id automatically per data item
            - IDs are meant to be a unique value: we target them because they are unique to the data
*/

router.get('/:id', (req,res) => {
    console.log(req.url); // Show us our endpoint
    // Detail an object with a key of "id" (our parameter name) & the value within the URL we passed to it.
    // console.log(req.params); 
    // console.log(req.params.id); 

    /* 
        - used to help us locate one item in our database.
        - ID typically has a unique value to help us find that ONE item.
        - Can help us search several items.
    */

    try {
        // Use object destructuring jso id is equal to our /#, /:id, id = 1, id = 2, etc.
        let {id} = req.params;
        // Setting the variable results to equal whatever item in the DB has the same id as the variable id's value. .filter() method checks each item in the array till it finds the one whose id matches.
        let results = db.filter(i => i.id == id)
        // console.log("Results:", results);
        res.status(200).json( {
            status: `Found item at id: ${id}`,
            results
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
})

// To do: build a route to GET all items in the "db"
router.get("/", (req, res) => {
    try {
        res.status(200).json({
            results: db
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
})

// To do: build a route that can POST a new to do list item.
router.post("/", (req, res) => {
    try {
        // We want to grab data from the req body (via Postman), console log
        const toDoItem = req.body;
        // console.log(toDoItem)
// 1. The path needs to be be relative to where fs is located (node_modules), NOT from the controllers location.
        //                  1
        fs.readFile("./helpers/db.json", (err, data) => {
            // quick conditional to deal with any error it comes across
            if (err) throw err; // Single line conditional doesn't need curly brackets

            // Parses the Json file and provides an array of our objects back so we can manipulate it.
            const db = JSON.parse(data);

            // push the object supplied by the body to our array.
            db.push(toDoItem);

            // Write to our JSON file
            fs.writeFile("./helpers/db.json", JSON.stringify(db), err => console.log(err));
            /* 
            - Requires
            - route to original file (same pathway as readFile)
            - what needs to be included or written
            - We are making out array BACK into a JSON format and stringify-ing it. It requires whatever data we desire.
            - Callback function to handle errors
            */
            res.status(200).json({
                status: "New item added to DB!",
                toDoItem,
            });
        });
    } catch (err) {res.status(500).json({
            error: err.message,
        })
    }
})


// TODO: Updated (PUT)

/* 
    - pass ID value as a param, /:id (id will become parameter name used inside the logic)
    - iterate through options (look through the db contents, comes back as an array of objects)
    - check if id matches param (if else, or other conditional check)
    - reassign the db at the index to what come from body. (take the request body and edit/replace the "incorrect"/wrong object we want to change)
    - save file (means using the fs.writeFile to update and save the whole json file/object we have changed)

    * stretch goal: update just the data without modifying the ID
    [x] start the route and add the param string
    [x] build skeleton try/catch
    [x] try is success response, grab the param
    [x] Create logic that uses an array method to find and match the param to a db item
    [x] First I need fs to read the file with .readFile (you have to read the file before you can do anything with the content)

*/

router.put("/:id", (req, res) => {
    try {
        // let { id } = req.params;
        // console.log(id, ":", typeof id);
        const id = Number(req.params.id);
        // console.log(typeof id);

        // The new values coming in with / via the request
        const todo = req.body;

        fs.readFile("./helpers/db.json", (err, data) => {
            // All the logic I want to build after fs reads the json
            if (err) throw err;

            const db = JSON.parse(data);

            // declare a result var to assign later
            let result;
            
            // Using forEach method to find and then replace the item that matches the param id.
            db.forEach((e, i) => {
                console.log(e, i);

                // If the object/item's id matches the param, we do something
                if (e.id === id) {
                    // In the if: when match is found we want to be able to replace/overwrite/edit the object to the new values
                    // Assign the object to todo(req.body): grabbing the item at its array index and reassigning its values to what we passed in via the request body (todo var)
                    db[i] = todo;
                    // Reassign/assign the result var the todo var as well (so the response has what the new object content is).
                    result = todo;

                    fs.writeFile("./helpers/db.json", JSON.stringify(db), err => console.log(err)
                    );
                }
            });

            // whatever you're testing ? (this runs if true) : (this runs if false)
            result ? res.status(200).json({
                status: `ID: ${id} was successfully updated.`,
                object: result
            }) : res.status(404).json({ status: `Id: ${id} was not found.`});

        });
    }
    catch (err) {res.status(500).json({
        error: err.message
    });
    }
});

// TODO: Delete a task
/* 
    - pass ID as a param - Numberify it: const id = Number(req.params.id);
    - read file - fs.readFile()
    - filter to match the param value
        - return what doesn't match
    - write to file, fs.writeFile()

*/

router.delete("/:id", (req, res) => {
    try {
    const id = Number(req.params.id);

        // Takes the JSON content from the file location and parses it into a plain array with normal JS objects instead of JSON objects.
        fs.readFile("./helpers/db.json", (err, data) => {
            if (err) throw err;

            const db = JSON.parse(data);

            // declare a var that holds and does all the sorting/filtering logic.
            const filteredDB = db.filter((e) => {
                // we want to check for the id... and return only what doesn't match
                if (e.id !== id) {
                    return e;
                }
            });
            fs.writeFile("./helpers/db.json", JSON.stringify(filteredDB), (err) =>
            console.log(err)
          );
          res.status(200).json({
            status: `ID: ${id} was successfully deleted.`
          })
        })

} catch (err) {
    res.status(500).json ({
    error: err.message,
})
}
})

module.exports = router;