/*
  ? CLASSES, ARRAYS AND MATH OBJECT
  Defining a class to create new Object instances and then
  storage them into an array to register employees. 
*/

class Employee {
    constructor(id, name, birthday) {
        this.id = id;
        this.name = name;
        this.birthday = birthday;
    }

    showData() {
        console.log(`
        <==> Employee's information <==>
        - ID: ${this.id}
        - Name: ${this.name}
        - Birthday: ${this.birthday}
        ================================
        `);
    }
}

// Creating a new object instance and displaying its data.
let emp = new Employee(99, "Charles Darwin", "2010-10-15");
emp.showData();

// Defining a new array fullfilled with names and birthdates
let names = ['Maria Hill', 'Casandra Lawrence', 'Joseph Garr', 'Burry Mory', 'Bob Peterson', 'Larry Dop']
let birthdates = ['2002-10-23', '1992-12-12', '2000-09-30', '2004-11-15', '2010-02-28', '1982-05-03']

// Defining an empty array to store employees instances
let employees = [];
for (i = 0; i <= 3; i++) {
    let newEmployee = new Employee(i+1, names[Math.floor(Math.random() * names.length)], birthdates[Math.floor(Math.random() * birthdates.length)]);
    employees[i] = newEmployee;
}

// Printing storaged data
console.log(employees.map(e => `ID: ${e.id} | Name: ${e.name} | Birthdate: ${e.birthday}`));