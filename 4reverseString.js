// 4reverseString.js

// Function
function reverse(str) {
    return str.split(" ").map(function(element) {return element.split('').reverse().join('')}).join(" ");
}

// Testing
console.log(reverse(" A fun little challenge! "));