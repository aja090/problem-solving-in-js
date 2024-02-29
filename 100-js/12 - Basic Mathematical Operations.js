//? Your task is to create a function that does four basic mathematical operations.

//? The function should take three arguments - operation(string / char), value1(number), value2(number).
//? The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {

    let result;

    if (operation === '+') {
        result = value1 + value2;

    } else if (operation === '-') {
        result = value1 - value2;

    } else if (operation === '*') {
        result = value1 * value2;

    } else if (operation === '/') {
        result = value1 / value2;
    }
    return result;
}
console.log(basicOp('*', 5, 10));

// حل بطريقة جافاسكربتية بولت ان فانكشن
function basicOP(o, v1, v2) {
    return eval(v1 + o + v2)
}

console.log(basicOP('/', 100, 2));