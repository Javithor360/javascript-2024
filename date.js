let today = new Date();

let bob = new Date('November 15, 2004 01:05:30');
/* let bob = new Date('2004-12-15T01:05:30');
let bob = new Date(2004, 10, 0);
let bob = new Date(2004, 10, 0, 7, 1, 30); */

let elapsedTime = today - bob;
console.log(elapsedTime);

// get parts
console.log(bob.getDate());