// Importing hooks to keep variables and perform duty cycle control:
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Importing function that provides information from data base:
import { getData } from "../../../helper/helper";
// Importing component to list items:
import { ItemList } from "../ItemList/ItemList";

// CSS Import:
import "./ItemListContainer.css";

export const ItemListContainer = () => {
	// State variables to vehicle information storage and load status:
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);

	// Variable where the required category name is saved to get related items list:
	const { category } = useParams();

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
			const list = await getData(category);
			setCars(list);
			setLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCars();
	}, [category]);

	return (
		<div className="itemListContainer">
			{loading ? (
				<p className="message">Loading...</p>
			) : (
				<ItemList data={cars} />
			)}
		</div>
	);
};
