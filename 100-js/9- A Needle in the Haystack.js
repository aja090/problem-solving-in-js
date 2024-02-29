//? Can you find the needle in the haystack?
//? Write a function findNeedle() that takes an array full of junk but containing one "needle"
//? After your function finds the needle it should return a message(as a string) that says:
//? "found the needle at position " plus the index it found the needle

//! STEPS

// 1- loop through the array(haystack)
// 2- check if the element === needle
// 3- return the massage

function findNeedle(haystack) {
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack[i] === "needle") {
    //         let index = haystack.findIndex(needle => needle == "needle")
    //         return "found the needle at position " + index
    //     }
    // }


    return "found the needle at position " + haystack.indexOf("needle")
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));