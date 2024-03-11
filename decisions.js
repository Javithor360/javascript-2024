let count = 3;
if(count == 4) {
    console.log('Count is 4')
} else if(count > 4) {
    console.log('Count is greater than 4')
}else {
    console.log('Count is NOT 4')
}

let hero = 'superman';
switch (hero) {
    case 'superman':
        console.log('super strength');
        console.log('x-ray vision');
        break;
    case 'batman':
        console.log('intelligence');
        console.log('fightning skills');
        break;
    default:
        console.log('member of JLA')
        break;
}

let a = 1, b = '1';
console.log((a == b) ? 'equal' : 'inequal');
console.log((a !== b) ? 'equal' : 'inequal');