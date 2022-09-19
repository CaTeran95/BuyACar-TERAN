// Importing hooks to manage state variables and life cycles:
import { useEffect, useState } from "react";
// Importing the Item Detail component to show vehicle information:
import { ItemDetail } from "../../single/ItemDetail/ItemDetail";
// Importing hook from ReactRouterDOM to manage dynamic routes:
import { useParams } from "react-router-dom";
// Importing methods to access database from Firebase:
import { doc, getDoc } from 'firebase/firestore';
// Importing DB initialization:
import { db } from "../../../utils/firebase";

// CSS Import:
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
	// State variables to vehicle information storage and load status:
	const [car, setCar] = useState({});
	const [loading, setLoading] = useState(true);

	// Variable where the required item id is saved to get its information:
	const { id } = useParams();

	// GETTING ITEM INFORMATION FROM FIREBASE:

	const getItem = async () => {
		const queryRef = doc(db, 'Cars', id);
		const data = await getDoc(queryRef);
		const item = {...data.data() ,id: data.id};
		setCar(item);
		setLoading(false);
	}

	// Life cycle control to get vehicle information at first page load:
	useEffect(() => {
		getItem();
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
