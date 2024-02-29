//? You get an array of numbers, return the sum of all of the positives ones.

//! STEPS

// 1- initvalue = 0
// 2- Array Loop
// 3- check if the num is Positives or not
// 4- add the number to the initvalue if its Positives

function sumOfPositives(arr) {

    //?soloutin one with no bulit in function

    // initValue = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 0) {
    //         initValue += arr[i];
    //     }
    // }
    // return initValue;

    //?soloutin two with bulit in function

    return arr.filter((i) => i > 0).reduce((crr, acc) => crr + acc, 0)
}

console.log(sumOfPositives([1, 2, 3, -5]));