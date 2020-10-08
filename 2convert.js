// 2convert.js


// Function
function convert(obj) {
    let arr = [];
    for (let x in obj) {
        arr.push([x,obj[x]])
    }
    return arr
}

// Testing
console.log(convert({name: 'Jeremy', age: 24, role: 'Software Engineer'}))