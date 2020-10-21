// 8sum.js

// Functions
function sum() {
    if (arguments.length >= 1) {
    return (arguments[0] + sum.apply(null,(Array.prototype.slice.call(arguments, 1))))
    } else {
        return 0
    }
}

// Testing
console.log(sum(3,6,8));

