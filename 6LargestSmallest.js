// 6LargestSmallest.js

// Functions
function largest() {
    return Math.max.apply(null, arguments);
}

function smallest() {
    return Math.min.apply(null, arguments);
}


// Testing
console.log(largest(1,4,76,1));
console.log(smallest(1,4,76,1,-34))