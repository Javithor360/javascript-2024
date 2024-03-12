/*
    ? PROMISES AND ASYNC/AWAIT
    Using promises and asynchronous javascript to fetch data
*/

// Filling up a simple object array 
const libros = [{
    title: 'Aprendiendo JavaScript',
    year: '2024',
    author: 'Alfredo Espino'
}, {
    title: 'React en la actualidad',
    year: '2022',
    author: 'Miguel de Cervantes'
}, {
    title: 'El Principito',
    year: '1943',
    author: 'Antoine de Saint-Exupéry'
}];

// Creating a new function to get the data of the array via promises
function getData() {
    return new Promise((resolve, reject) => {
        if(libros.length === 0) {
            reject(new Error("Data is empty"));
        }

        setTimeout(() => {
            resolve(libros);
        }, 2000);
    });
}

// Calling the function with then/catch
/* getData()
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message)); */

// Calling the function with async/await
async function fethData() {
    const res = await getData();
    console.log(res);
}

fethData();