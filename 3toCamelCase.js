// 3toCamelCase.js


// Function
function toCamelCase(str) {
    return str.split("").map(function(elem,i,arr) {
        if ((elem == "_") || (elem == "-")) {
            arr[i+1] = arr[i+1].toUpperCase();
            return ""; 
        } else {
            return elem;
        }
    }).join("");
}

// Testing
console.log(toCamelCase("The_Stealth-Warrior"));