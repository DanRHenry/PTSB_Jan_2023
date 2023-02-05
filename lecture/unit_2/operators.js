/* 
JavaScript Operators
        - Plus          +
        - Times         *
        - Power         **
        - Dot           .
        - Assignment    =
        - Comparison    ==
                        ===

    Used to: 
        - Assign
        - Compare
        - Arithmetic(Maths)
        - Logical
        - Conditionals
*/

// Equal to: ==
console.log("3" == 3); // true
console.log("4" == 3); // false
console.log("a" == "A");
console.log("a" === "A");

// Strictly Equal to: === checks value and data type
console.log("3" === 3);
console.log("hello" === "hello");// true
console.log(100 === 200); // false

// Not Equal & Strict Not Equal: !=, !==
console.log("2" != 2); // false
console.log("2" != 3); // true
console.log("2" !== 2); // true

// Greater Than / Less Than: > < 
let y = 3 > 2; // useful instead of a whole if statement...
console.log("Greater Than: ", y); // True
console.log(typeof y); // Boolean

// Greater Than or Equal To: >=
console.log(3 >= 2, 5 >= 10, 5 >= 5);

// Less Than or Equal To: <=
console.log(2 <= 2, 1 <= 2, 5 <= 2);

// And: && 
console.log("And: ", 2 < 10 && 2 > 3); // True
console.log(5 < 3 && 2 > 1); // False

// Or: ||
2 || 4;

console.log(3 < 1 || 5 > 3); //

//* Logical Operators: determine the logic between variables or value
// Ex w/ reassignment
let a = 1;
console.log(a); // 1
a = a+1;
console.log(a); // 2
a = a+1;
console.log(a); // 3

// Ex w/o reassignment
let g = 100;
console.log(g + 50);
console.log(g);

// Addition:
r += 1; // r = r + 1

let s = 50;
console.log(s += 5);

// Subtraction
r -= 1; // r = r - 1;

// Multiplication
r *= 2; // r = r * 2;

// Division: /
r /=3; // r = r / 3;

// Remainder (modulus %);
r %=1;
console.log(3 % 2);

// Exponential
r **= 1; r = r * r;

console.log(2 ** 3) // 8, (2 * 2) *2;