//? Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!



function createArray(number) {
    let newArray = [];

    for (let i = 0; i < number; i++) { // حرفيا الحل بس اضيف زائد زائد i++
        newArray.push(i)
    }

    return newArray
}

console.log(createArray(5));