//? Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times

//! STEPS

// 1- Create empty string
// 2- Take the number argument and loop through it
// 3- find lowest array

function repeatStr(num, str) {

    //?soloutin one with no bulit in function

    // let newStr = "";
    // for (let i = 0; i < num; i++) {
    //     newStr = newStr + str
    // }
    // return newStr

    //?soloutin two with bulit in function

    return str.repeat(num)
}

console.log(repeatStr(5, " Aseel "));