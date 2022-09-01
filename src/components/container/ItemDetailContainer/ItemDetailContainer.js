// Importing hooks to manage state variables and life cycles:
import { useEffect, useState } from "react";
// Importing the Item Detail component to show vehicle information:
import { ItemDetail } from "../../single/ItemDetail/ItemDetail";
// Importing function that provides information from data base:
import { getItem } from "../../../helper/helper";

// CSS Import:
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
	// State variables to vehicle information storage and load status:
    const [car, setCar] = useState({});
	const [loading, setLoading] = useState(true);

    // Async function to manage the mocked server answer promise:
	const getCar = async () => {
		try {
			const item = await getItem;
			setCar(item);
            setLoading(false);
		} catch (error) {
			console.log(`There was an error ${error}`);
		}
	};

    // Life cycle control to get vehicle information at first page load:
	useEffect(() => {
		getCar();
	}, []);

	return (
		<>
			{loading ? (
				<p className="message">Loading detail view...</p>
			) : (
				<ItemDetail item={car} />
			)}
		</>
	);
};
