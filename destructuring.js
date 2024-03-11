let a, b, c, d, e;

let names = ['david', 'eddie', 'alex', 'michael', 'sammy'];

[a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let others;
[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others);

// let year, model;
({make, model} = {
    make: "bmw",
    model: '785i',
    year: 2010,
    value: 5000
});

console.log(make);
console.log(model);