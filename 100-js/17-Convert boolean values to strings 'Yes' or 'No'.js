//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//! STEPS

// 1- chick if the argument true return "yes" if false return "no"

function boolToWord(bool) {

    if (bool === true) {
        return "yes"
    } else {
        return "no"
    }
}
console.log(boolToWord(false));


//! soloutin two with ternity if else
function boolToWordx(bool) {

    return bool ? "yes" : "no"
}
console.log(boolToWordx(true));