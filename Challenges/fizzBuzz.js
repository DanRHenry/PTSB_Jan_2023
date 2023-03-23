/* 
! Fizz Buzz Challenge:

    Instructions:

    - Write a program that uses a loop, conditional, and console.log() to print all the numbers from 1 to 30 inclusive, and follows the rules below:
        1. For numbers evenly divisible by 3, print "Fizz" instead of the number.
        2. For numbers evenly divisible by 5, and not 3, print "Buzz" instead of the number.
        3. For numbers that are evenly divisible by both 3 and 5, print "FizzBuzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5, and not both.
        4. For any number that is not divisible by either 3 or 5, print the number itself.

    Hint: Remember to check that numbers divisible by both 3 and 5 print "FizzBuzz", and not just "Fizz" or "Buzz".

    Hint: You may have to reorder the arrangement of conditional checks to ensure the correct result prints for each number.

    Your code should output should start with the following:
        1
        2
        Fizz
        4
        Buzz
        Fizz
        7
        8
        Fizz
        Buzz
*/
for (let i = 1; i<30; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz") 
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else { console.log(i)}
    }
/* 
    Additional Challenge:
    Solve the Fizz Buzz Challenge using each type of conditional structure type.
*/

