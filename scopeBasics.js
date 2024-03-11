let a = 'first';

function scopeText() {
    console.log(a);

    let b = 'won\'t work outside the function';
}

console.log(b);