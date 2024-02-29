//? Take an array and remove every second element from the array.Always keep the first element and start removing with the next element.

//!    Example:
//* ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]


function removeEveryOther(arr) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));




//! with built in function
function removeEveryOtherx(arr) {

    return arr.filter((x, i) => i % 2 === 0);
}

console.log(removeEveryOtherx([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));