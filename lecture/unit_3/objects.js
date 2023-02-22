// Object

let marvelHero = {
    // property: key/value pair
    fullName: "Peter Parker",
    heroName: "Spider-Man",
    age: 25,
    active: true
}

/*
? Object Literals

    When our values are written within our keys. "Hard Coded"
        * Structure:
            keyword objectName = {
                key: value,
            }
            let ourObj = {
                firstKey: "string",
            }

    Are dictionaries... not technically, but they are, in JS.
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    seasons: {
      "season one": [
        {
          episode_title: "Simpson Roasting on an Open Fire",
          aired: "1989-12-17",
        },
        {
          episode_title: "Bart the Genius",
          aired: "1990-01-01",
        },
        ["1989-12-17", "1990-01-14"],
      ],
      "season two": [
        /* .... */
      ],
      "season three": [
        /* .... */
      ],
    },
    currently_running: true,
  };

//* Dot Notation & Square Brackets
console.log(theSimpsons.genre);
console.log(theSimpsons["genre"]);

// Multi-word Key:
console.log(theSimpsons.seasons[`season one`])
// console.log(theSimpsons.seasons.season one) // dot notation does NOT work for multi-word keys

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
console.log(theSimpsons);

theSimpsons.showRating = 5;
console.log(theSimpsons);

// How to add another character to the array
// theSimpsons.characters[5].push ("Ned"); // broken... fix later
console.log(theSimpsons.characters);

theSimpsons.seasons["season one"][1].aired = "1990-01-14";
console.log(theSimpsons.seasons["season one"][1]);
console.log(theSimpsons.seasons["season one"][2][0])