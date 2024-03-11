let first = 'Knowledge is power but enthusiasm pulls the switch';
let second = 'Do or do not. There is no try.';
let third = '4,8,15,16,23,42';

// you can call this method on string literals
console.log(`bob loved you`.toUpperCase());

let mySplit = third.split(',');
console.log(mySplit);

let mySlice = first.slice(13, 18);
console.log(mySlice);

let mySubstr = first.substring(13, 5);
console.log(mySlice);

let myStartsWith = second.startsWith('Do');
console.log(myStartsWith);

let myInclude = second.includes('Three');
console.log(myInclude);

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

let myTrim = '       bloated          ';
console.log(myTrim.length);
console.log(myTrim.trim().length)