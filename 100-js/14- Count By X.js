//? Create a function with two arguments that will return an array of the first n multiples of x.

//? Assume both the given number and the number of times to count will be positive numbers greater than 0.

//? Return the results as an array or list(depending on language).

//! STEPS

// 1- loop through the array
// 2- check if the number has an integer square root or not
// 3- if true take the root , false square the number
// 4- return the new array 

function countBy(x, n) {
    const z = [];

    for (let i = 1; i <= n; i++) {

        let mul = x * i;
        z.push(mul)
    }
    return z;
}

console.log(countBy(2, 5));




function joinStrings(string1, string2) {
    // Use string template literal to concatenate with a space
    return `${string1} ${string2}`;
}
console.log(joinStrings('A', 'ddfe')); // Output: "Hello World"