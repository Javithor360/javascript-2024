let myString = new String('howdy');
console.log(myString);

console.log(myString.toString());
console.log(typeof myString);

let myPrimitive = 'THIS IS CRAZY';
console.log(typeof myPrimitive);
myPrimitive = myPrimitive.toLowerCase();
console.log(typeof myPrimitive);

let myNumber = new Number(7);
console.log(typeof myNumber);
let myPrimitiveNumber = myNumber.valueOf();
console.log(typeof myPrimitiveNumber)