// Importing hooks to keep variables and perform duty cycle control:
import { useEffect, useState } from "react";
// Importing function that provides information from data base:
import { getData } from "../../../helper/helper";
// Importing component to list items:
import { ItemList } from "../ItemList/ItemList";

// CSS Import:
import "./ItemListContainer.css";

export const ItemListContainer = ({ message }) => {
	const [cars, setCars] = useState([]);
	// Declaration and configuration of a state variable to display the query current state:
	const [loading, setLoading] = useState(true);

	// USING THE FUNCTION THAT MOCKS THE QUERY TO THE SERVER:

	// Solving with promises:

	// useEffect(() => {
	// 	getData
	// 		.then((data) => {
	// 			setCars(data);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => console.log("There was an error: ", error));
	// }, []);

	// Solving with Async Await:

	const getCars = async () => {
		try {
			const list = await getData;
			setCars(list);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCars();
	}, []);

	return (
		<div className="itemListContainer">
			{message && <p className="message">{message}</p>}
			{loading ? (
				<p className="message">Loading...</p>
			) : (
				<ItemList data={cars} />
			)}
		</div>
	);
};
