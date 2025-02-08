function capitalize(someWord) {
    let word = ""
    for (let i = 0; i < someWord.length; i++) {
        if (i == 0) {
        word += someWord[i].toUpperCase();
        } else {
        word += someWord[i].toLowerCase();
        }
    }
return word
}
console.log(capitalize('tomato'));     // should print 'Tomato'
console.log(capitalize('BACON'));      // should print 'Bacon'
console.log(capitalize('LeTTuCe'));    // should print 'Lettuce'
console.log(capitalize('mayonnAISE')); // should print 'Mayonnaise'
