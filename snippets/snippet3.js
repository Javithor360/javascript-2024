// ! SET 

// Declaring a simple array with numbers and some duplicates
let myArray = [1, 2, 3, 4, 5, 2, 2, 3, 1, 5];
// Creating a new Set with the indexes from `myArray`
let mySet = new Set(myArray); // Set only stores unique values, duplicates are ommited

console.log(myArray);
console.log(mySet);

let uniqueArray = [...mySet]; // We can convert the Set into a classic array with spread operator
console.log(uniqueArray);

// ! MAP
// Declaring a simple Map
const dynamicMap = new Map([ [1, "Hola"], [2, "mundo"]]);
// A Map Object has Key and Value parameters and can store any type of data.
dynamicMap.set(3, "adiós");
dynamicMap.set(4, "vida");

console.log(dynamicMap.has(1)); // true
console.log(dynamicMap.get(3)); // adiós

// Printing all the object (Key,Value) Map
for (const item of dynamicMap) {
    console.log(item);
}

// Printing Map properties separately
for (const [key, value] of dynamicMap) {
    console.log(`${key} | ${value}`);
}