// Importing data base json file:
import data from '../db/carsDB.json';

// Creating the promise that emulates network delays:
export const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
        reject((err) => console.log(err));
    }, 2000)
});