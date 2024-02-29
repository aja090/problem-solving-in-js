//? Nathan loves cycling.
//? Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//? You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//! For example:

// time = 3 ----> litres = 1
// time = 6.7-- -> litres = 3
// time = 11.8-- > litres = 5


function litres(time) {

    return Math.floor(time / 2)
}

console.log(litres(11.8));

//! OR

function litresx(time) {

    return time / 2 | 0
}

console.log(litresx(6.7));

//* The | 0 performs a bitwise OR with 0, which has the same effect as using Math.floor() for positive numbers.
//* Keep in mind that this method works well for non - negative numbers but may produce unexpected results for negative numbers
//* due to differences in behavior between | and Math.floor() in handling negative values.For general use,
//* I recommend sticking with Math.floor() for clarity and consistency