// 6LargestSmallest.js

// Functions
function largest(...args) {
    return Math.max.apply(null,args);
}

function smallest(...args) {
    return Math.min.apply(null,args);
}


// Testing
console.log(largest(1,4,76,1));
console.log(smallest(1,4,76,1,-34))