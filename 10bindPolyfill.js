// 10bindPolyfill.js


// // Function
// Function.prototype.myBind = function (context) {
//     const obj = this;
// 	return function(...args) {
// 		return obj.apply(
// 			context,
// 			args
// 		);
// 	}
// }

// // Testing
// function addPropToNumber(number, arg1) { return this.prop + number*arg1; }
// let bound = addPropToNumber.myBind({ prop: 9 },3);
// console.log(bound(1)); // 10

Задача еще в работе. Пытаюсь разобраться, пока еще не понял до конца.