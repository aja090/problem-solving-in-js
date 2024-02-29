//? Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
//? You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful,
//? there shouldn't be a space at the beginning or the end of the sentence!

//! Example
//* ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'



function smash(words) {
    return words.join(' ')
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));


//! without built in function
function smash2(words) {
    let result = '';
    for (let i = 0; i < words.length; i++) {
        if (i == 0) {//this is made so there is no space at start
            result += words[i]
        } else { // Append subsequent words with a space in between
            result = result + ' ' + words[i]
        }
    }
    return result
};

console.log(smash2(['hello', 'world', 'this', 'is', 'great']));