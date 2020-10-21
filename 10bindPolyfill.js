// 10bindPolyfill.js


// // Function
Function.prototype.myBind = function (context) {
    var MainFunction = this;
    var MainArgs = Array.prototype.slice.call(arguments,1);
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return MainFunction.apply(context, MainArgs.concat(args))
    }
}



// Testing
const person = {
    name: "Magomed"
}

function sayHiTo(city,country) {
    console.log(`Hello: ${this.name} from ${city}, ${country}`);
}

sayHiTo.myBind(person,"Saint-Petersburg")("Russia");



