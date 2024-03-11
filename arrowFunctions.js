let hi = () => {
    console.log('howdy');
};
hi();

let hello = (name) => {
    console.log(`howdy ${name}`);
};
hello('bob');

let add = (a, b) => {
    return a + b;
}
console.log(add(7, 3));

let names = ['david', 'eddie', 'alex', 'michael'];
let i = 0;
names.map((name) => { i++; console.log(`hello ${name} ${i}`)});

let transformed = names.map((name) => { return `hello ${name}` });
console.log(transformed);
