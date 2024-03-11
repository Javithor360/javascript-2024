let names = ['david', 'eddie', 'alex', 'michael'];
let others = ['sammy', 'gary', 'wolfgang', 'mark'];

let lost = [4, 8, 15, 16, 23, 42];
let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

let combine = lost.concat(fibonacci);
console.log(combine);

console.log(fibonacci.join('~'));

console.log(lost.shift());
console.log(lost);

lost.unshift(1, 2, 3, 4);
console.log(lost);

console.log(names);
console.log(names.reverse());
console.log(names.sort());

console.log(others.indexOf('mark'));

console.log(combine);
console.log(combine.lastIndexOf(1));

let filter = combine.filter((x) => {
    if(x < 15) return x;
});
console.log(filter);

names.forEach((name) => console.log(`howdy ${name}`));

// every item of the array meets the condition
console.log(filter.every((num) => num < 10));
console.log(filter.every((num) => num < 16));

// at least one item of the array meets the condition
console.log(fibonacci.some((num) => num > 50));