//? When provided with a number between 0 - 9, return it in words.

//todo  Input :: 1
// *Output:: "One".



function switchItUp(number) {

    switch (number) {
        case 0:
            return "zero"
            break;

        case 1:
            return "one"
            break;
        case 2:
            return "two"
            break;

        case 3:
            return "three"
            break;

        case 4:
            return "four"
            break;

        case 5:
            return "fife"
            break;

        case 6:
            return "six"
            break;

        case 7:
            return "seven"
            break;

        case 8:
            return "eghiht"
            break;

        case 9:
            return "nine"
            break;

        default:
            return "i dont take number abov 9"
            break;
    }
}

console.log(switchItUp(7));