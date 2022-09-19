// Importing hooks to keep variables and perform duty cycle control:
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Importing component to list items:
import { ItemList } from "../ItemList/ItemList";
// Importing methods to access database from Firebase:
import { collection, getDocs, query, where } from "firebase/firestore";
// Importing DB initialization:
import { db } from "../../../utils/firebase";

// CSS Import:
import "./ItemListContainer.css";

export const ItemListContainer = () => {
	// State variables to vehicle information storage and load status:
	const [cars, setCars] = useState([]);
	const [loading, setLoading] = useState(true);

	// Variable where the required category name is saved to get related items list:
	const { category } = useParams();

	// GETTING THE LIST OF PRODUCTS FROM FIREBASE:

	const getData = async () => {
		try {
			const queryRef = category
				? query(collection(db, "Cars"), where("category", "==", category))
				: collection(db, "Cars");
			const data = await getDocs(queryRef);
			const list = data.docs.map((item) => {
				return { ...item.data(), id: item.id };
			});
			setCars(list);
			setLoading(false);
		} catch (error) {
			console.log("There was an error: ", error);
		}
	};

	useEffect(() => {
		getData();
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
