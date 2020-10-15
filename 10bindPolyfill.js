// 10bindPolyfill.js


// // Function
Function.prototype.myBind = function (context, ...rest) {
    let MainFunction = this;
    return function(...args) {
        return MainFunction.apply(context, rest.concat(args))
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



