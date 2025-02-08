const mongoose = require("mongoose");
/* 
  Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String
    },
    rating: {
        type: String,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
    },
    // Added property to store the user's ID of who made the movie object/"document".
    owner_id: {
        type: String,
    }
})

module.exports = mongoose.model("Movie", MovieSchema);