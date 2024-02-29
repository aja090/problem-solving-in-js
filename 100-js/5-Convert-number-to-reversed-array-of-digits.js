//? Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//! STEPS

// 1- Change the number to string
// 2- Split the string to array
// 3- Change the string in the array to number
// 4- Reverse the array

function digitize(n) {

    return n
        .toString()
        .split("")
        .map((m) => Number(m))
        .reverse();
}

console.log(digitize(987654321));