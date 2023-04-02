const router = require('express').Router();
const db = require('../helpers/db.json');
const fs = require('fs');

// GET ALL ROUTE - Read
router.get("/", (req, res) => {
    try {
      res.status(200).json({
        results: db,
      });
    } catch (err) {
      res.status(500).json({
        error: err.message,
      });
    }
  });

// GET One by ID - Read
router.get("/:id", (req, res) => {
    try{
        const id = req.params.id;

        let character = db.filter(obj => obj.id == id);
        res.status(200).json({
            status: `Found character at id: ${id}`,
            character,
        })

    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
})

// GET ALL by Class - Read
router.get("/class/:class", (req, res) => {
    try {
        const characterClass = req.params.class;

        let charResults = db.filter((obj) => obj.class.toLowerCase() === characterClass.toLowerCase());

        if (charResults.length === 0) {
            res.status(401).json({
                message: `There are no ${characterClass}s.`,
            }) //
        }

        res.status(200).json({
            characters: charResults
        })

    } catch (err) {
        res.status(500).json({
            error: err.message,
        })
    }
}) // Here, class could be anything. Creating a parameter name, like any other.


// POST One - Create

// PUT One by ID - Update

// DELETE One by ID - Delete


module.exports = router;