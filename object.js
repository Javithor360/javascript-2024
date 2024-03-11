let car = {
    make: 'bmw',
    model: '745li',
    year: 2010,
    getPrice: function() {
        return 5000;
    },
    printDescription: function() {
        console.log(this.make + ' ' + this.model);
    }
}

car.printDescription();
console.log(car.year);
console.log(car['year']);

let anotherCar = {};
anotherCar.whatever = 'bob';
console.log('bob');

let a = {
    myProperty: { b: 'hi '}
}
console.log(a.myProperty.b)

let c = {
    myProperty: [
        { d: 'this' },
        { e: 'can' },
        { f: 'get'},
        { g: 'crazy' }
    ]
};
console.log(c);

let carLot = [
    { year: 2017, make: 'Toyota', model: '4Runner' },
    { year: 2015, make: 'BMW', model: '528i' },
    { year: 1982, make: 'Buick', model: 'Skylark' }
]