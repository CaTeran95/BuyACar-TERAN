import { data } from "./data";

// Importing cars images

// Creating the promise that emulates network delays:
export const getData = (filter) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			filter
				? resolve(data.filter((item) => item.category == filter))
				: resolve(data);
			reject((err) => console.log(err));
		}, 2000);
	});
};

// Function that returns the car object given the id:
export const getItem = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.find((item) => item.id == id));
			reject((err) => console.log(err));
		}, 2000);
	});
};
