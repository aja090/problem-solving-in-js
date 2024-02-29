//? Given an array of integers.

//? Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//? 0 is neither positive nor negative.

//? If the input is an empty array or is null, return an empty array.

//! Example
// For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//*! STEPS *//

// 1- create empty array for positives numbers
// 2- create var for sum of neg num
// 3- loop through the given array
// 4- check if the number postive add to new array , if negative add to the sum var 


function countPositivesSumNegatives(input) {
    if (input === null || input.length == 0) return [];

    let posArr = [];
    let neg = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            posArr++ // new sol => posArr.push(input[i])
        } else {
            neg += input[i]
        }
    }
    return [posArr, neg] // return [posArr.length,neg]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//! soloutin two with bulit in function
function countPositivesSumNegativess(input) {
    if (input === null || input.length == 0) return [];

    let posNum = input.filter((x) => x > 0).length;
    let negSum = input.filter((x) => x < 0).reduce((acc, current) => acc + current, 0);
    return [posNum, negSum]
}

console.log(countPositivesSumNegativess([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));