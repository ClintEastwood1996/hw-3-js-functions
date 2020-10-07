// Function
function splitAndMerge(str, sp) {
    return sp ? str.split('').map(function(letter){return letter+sp}).join('').slice(0,-1) : str;
}

// Testing
console.log(splitAndMerge('Привет','!'));
console.log(splitAndMerge('Привет',''));
console.log(splitAndMerge('Привет',' '));
console.log(splitAndMerge('Привет','6'));


