// 5stringExpansion.js


// Function
function stringExpansion(str) {
    return str.split("").map(
        function(elem,index,arr) {
        if (+elem) {
            if (!(+arr[index+1])) {
                let newStringArr = [];
                for (let i = 0; i < elem; i++) {
                    newStringArr.push(arr[index+1])
                }
                arr[index+1] = newStringArr.join("");
                return ""
            } else {
                return ""
            } 
        } else {
            return elem
        }
    }
    ).join("")
}

// Testing
console.log(stringExpansion("d332f2aF"));
console.log(stringExpansion("8K"));
console.log(stringExpansion("8564"));

