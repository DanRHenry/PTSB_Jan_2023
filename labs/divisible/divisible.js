// Regular Solution

function divisible(dividend, divisor) {
    let remainder = (dividend % divisor);
    console.log(remainder);
    if (remainder==0) {
        return true;
    } else {
        return false;
    }
}

console.log(divisible(1234, 43));

// Ternary Solution
let divisibleTernary = (dividend, divisor) => dividend % divisor == 0 ? true : false;
    console.log(divisibleTernary(24, 5));