//? Write a function which calculates the average of the numbers in a given list.

//todo/ Note: Empty arrays should return 0



function findAverage(array) {

    let arr = 0

    for (let i = 0; i < array.length; i++) {
        arr += array[i]
    }

    FindeAverage = arr / array.length
    return FindeAverage
}

console.log(findAverage([1, 2, 3, 4]));



//! soloutin two with bulit in function
function findAveragex(array) {

    return array.reduce((acc, crr) => acc + crr, 0) / array.length

}

console.log(findAveragex([1, 2, 3, 4]));