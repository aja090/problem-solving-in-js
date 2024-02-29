//? Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//! STEPS

// 1- turn the string into array
// 2- loop through the array
// 3- reapet each element once
// 4- return the array into string


function singleChar(str) {

    names = "";

    for (let i = 0; i < str.length; i++) {
        names += str[i] + str[i];
    }
    return names;
}
console.log(singleChar("Aseel"));

//  حليتها بطريقة جافاسكربتية بولت ان فانكشن
function doubleChar(str) {

    return str.split("").map((x) => x.repeat(2)).join("")
}

console.log(doubleChar("Aseel"));

