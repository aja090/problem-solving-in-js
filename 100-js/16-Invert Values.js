//? Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

//* invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
//* invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
//* invert([]) == []

//! STEPS

// 1- made new arr empaty
// 2- loop through the array
// 3- chick if the number + or - then inverted
// 4- return the new arr

function invert(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {

        newArr.push(array[i] * -1)
    }
    return newArr;
}
console.log(invert([1, -2, 3, -4, 5]));


//! soloutin two with bulit in function
function invertx(array) {

    return array.map((invert) => invert * -1)
}
console.log(invert([1, -2, 3, -4, 5]));