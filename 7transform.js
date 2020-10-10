// 7transform.js



// Functions
function transform(arr) {
    return arr.map(function(elem) {
        return function() {
            return elem
        }
    }
    )
}


// Testing
const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());
