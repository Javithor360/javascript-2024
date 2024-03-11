// -- WHAT HOT TO DO--
// let variable = 'I am at the global scope';

// let myFunction = function() {
//     console.log('me too!');
// }

function one() {
    return 'one';
}

let value = one;
console.log(value());

function two() {
    return function () {
        console.log('two');
    }
}

two();

function three() {
    return function() {
        return 'three';
    }
}

console.log(three()())