const router = require("express").Router();
// const movieModel = require("../models/movie.model");
const Movie = require("../models/movie.model");
// module.exports = router;

// Error Response Function
const errorResponse = (res, error) => {
  return res.status(500).json({
    Error: error.message,
  });
};
// TODO POST
// http://localhost:4000/movies/

router.post("/", async (req, res) => {
  try {
    //1. Pull data from client (body)
    const { title, genre, rating, length, releaseYear } = req.body;
    //2. Create a new object using the Model
    // const movie = new Movie ({
    //     title: req.body.title,
    //     genre: req.body.genre,
    //     rating: req.body.rating,
    //     length: req.body.length,
    //     releaseYear: req.body.releaseYear
    // })
    const movie = new Movie({
      title,
      genre,
      rating,
      length,
      releaseYear,
    });
    //3. Use mongoose method to save to MongoDB
    const newMovie = await movie.save();

    //4. client response
    res.status(200).json({
      // message: "Success! New Movie Added",
      message: `${newMovie.title} was added to the collection!`,
      //   movie: newMovie,
      newMovie,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});
// TODO GET One
router.get("/:id", async (req, res) => {
  try {
    // grab parameters from url
    const { id } = req.params;

    // Find the document(movie JSON obj) with in the DB collection
    const getMovie = await Movie.findOne({ _id: id });

    // Response message: use a ternary to make a fancy response
    getMovie
      ? res.status(200).json({
          msg: `${getMovie.title} was found!`,
          getMovie,
        })
      : res.status(404).json({
          message: "No movie found.",
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
// // grab parameters from url
// const {id} = req.params;

// // Find the document within the database collection
// const getMovie = await Movie.findOne({_id: id})

// // Response message: use a ternary to make a fancy response.
// getMovie ?
//     res.status(200).json({
//         msg: `${getMovie.title} was found!`
//     })
//     : res.status(404).json({
//         message: "No movie found."
//     });
// } catch (err) {
//     errorResponse(res, err);
//   }
// });
/* 
   Challenge
        - By ID
        - Response should consider
            - If found
            - If no document found
        
        Hint: Consider login within user.controller.js

*/
// res = movie.filter(i => i.id == id)
// movie = res.filter(i => i.id == id)
// console.log(res.body)
// const { title, genre, rating, length, releaseYear} = res.body;
// const movieName = await Movie.findOne({title: title});

// // console.log(res.body);
// // console.log(res);
// // console.log(title)
// if (!movieName) throw new Error ("Movie not found.")

//         } catch (err) {
//       errorResponse(res, err);
//     }
//   });

//TODO Get All
/* 
   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        
        
        Hint: parameters within method are optional
*/

router.get("/", async (req, res) => {
  try {
    // This endpoint will only return all movies, no req or params needed
    // Await all documents from the Movie collection
    const getAllMovies = await Movie.find();
    getAllMovies
      ? res.status(200).json({
          message: "All movies from movie collection:",
          getAllMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
// TODO Get All by Genre
/* 
!   Challenge
        - No special endpoint necessary
        - Response should consider
            - If found
            - not found
        - Consider parameter casing within the endpoint.
            - hint: conditional w/ looping
*/

router.get("/genre/:genre", async (req, res) => {
  try {
    // Grab genre value from the parameters
    const { genre } = req.params;
    // let buildWord;

    // Trying to spell genres the same way...
    // if(genre) {
    //     for(let i = 0; i < genre.length; i++) {
    //         i === 0 ?
    //             buildWord = genre[i].toUpperCase():
    //             buildWord += genre[i].toLowerCase();
    //     }
    // }

    // Finding all movies in DB whose genre matches the params ({db genre key : req.params.genre})
    const getMovies = await Movie.find({ genre: genre });

    getMovies.length > 0
      ? res.status(200).json({
          getMovies,
        })
      : res.status(404).json({
          message: `No movies found.`,
        });
  } catch (err) {
    errorResponse(res, err);
  }
});
// TODO PATCH One
router.patch("/:id", async (req, res) => {
  try {
    //1. Pull value from parameter
    const { id } = req.params;

    //2. Pull data from the body.
    const info = req.body;
    // const { title, genre, rating } = req.body;
    
    //3. Use method to locate document based off ID and pass in new information.
    const returnOption = {new: true}// 
    // const updatedOption = {new: true};

    //* findOneAndUpdate(query, document, options)
    // returnOptions allows us to view the updated document
    const updatedMovie = await Movie.findOneAndUpdate({_id: id}, info, returnOption);
    // const update = await Movie.findOneAndUpdate({_id: id,});
    // const update = await Movie.findOneAndUpdate({id: _id});
    // if (!update) throw new Error ("ID Not Found!");
    //4. Respond to client.
    res.status(200).json({
      message: `${updatedMovie.title} has been updated successfully!`,
      updatedMovie,
    });
  } catch (err) {
    errorResponse(res, err);
  }
});
// TODO Delete One
//http://localhost:4000/movies/643c6251c06fc36a2ad85a93
router.delete('/:id', async (req,res) => {
  try {
      //1. Capture ID
      const { id } = req.params;

      //2. Use delete method to locate and remove based off ID
      const deleteMovie = await Movie.deleteOne({_id: id});

      //3. Respond to Client
      deleteMovie.deletedCount ? 
        res.status(200).json({
          message: "Successfully deleted",
          deleteMovie,
      }) 
      : res.status(404).json({
        message: "No movie in the collection was found.",
      });
  } catch (err) {
      errorResponse(res, err);
  }
});
module.exports = router;
