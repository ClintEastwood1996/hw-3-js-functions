// 1splitAndMerge.js

// Function  
function splitAndMerge(str, sp) {
    if (!sp) return str

    var newStr = str.split(' ').map(function(subStr) {
        return subStr.split('').map(function(letter){
            return letter+sp})
            .join('').slice(0,-1)})
            .join(' ');

    return newStr;
}

// Testing
console.log(splitAndMerge('Hello world','!'));
console.log(splitAndMerge('Hello world',''));
console.log(splitAndMerge('Hello world',' '));
console.log(splitAndMerge('Hello world',','));


