//? Write a method, that will get an integer array as parameter and will process every number from this array.

//? Return a new array with processing every number of the input - array like this:

//? If the number has an integer square root, take this, otherwise square the number.

//! STEPS

// 1- loop through the array
// 2- check if the number has an integer square root or not
// 3- if true take the root , false square the number 
// 4- return the new array 

function squareOrSquareRoot(array) {

    // let newArray = [];

    // for (let i = 0; i < array.length; i++) {
    //     if (Number.isInteger(Math.sqrt(array[i]))) {

    //         newArray.push(Math.sqrt(array[i]));

    //     } else {
    //         newArray.push(array[i] * array[i]);
    //     }
    // }
    // return newArray

    return array.map((num) => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : num * num);
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));