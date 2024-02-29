//? Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! )

//! STEPS

// 1- check if empty value return 0 
// 2- find heighest array 
// 3- find lowest array
// 4- sum all the number in the array

function SumWithoutHighestAndLowestNumber(arr) {

    return arr.sort((a, b) => a - b).slice(1, -1).reduce((acc, current) => acc + current, 0)

    //! هذه الحل غلط لان ماث هنا يحذف كل الارقام اذا جانت مشابها واني مااريد هالشي 
    //     if (arr == null) return 0;
    //     let maxValue = Math.max(...arr);
    //     let minValue = Math.min(...arr);

    //     let filteredArr = arr.filter((x) => x != maxValue && x != minValue);
    //     let sumArr = filteredArr.reduce((crr, acc) => crr + acc, 0);

    //     return sumArr
}

console.log(SumWithoutHighestAndLowestNumber([6, 2, 1, 8, 10]));