//? In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//! STEPS

// 1- chick if the num under the zero then make it +
// 2- chick if the num up the zero then make it -
// 3- return the num

function makeNegative(num) {

    if (num <= 0) {
        return num
    } else if (num > 0) {
        return -num
    }
}

console.log(makeNegative(10));