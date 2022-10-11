// Importing hooks to manage state variables and life cycles:
import { useEffect, useState, useContext } from "react";
// Importing the Item Detail component to show vehicle information:
import { ItemDetail } from "../../single/ItemDetail/ItemDetail";
// Importing hook from ReactRouterDOM to manage dynamic routes:
import { useParams } from "react-router-dom";

import { InfoContext } from "../../../context/InfoContext";

// CSS Import:
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
	const { itemDetail, getItemDetail, setItemDetail } = useContext(InfoContext);

	// Variable where the required item id is saved to get its information:
	const { id } = useParams();

	// Life cycle control to get vehicle information at first page load:
	useEffect(() => {
		getItemDetail(id);
	}, [id]);

	return (
		<>
			{itemDetail.id != id ? (
				<p className="message">Loading detail view...</p>
				) : (
					<ItemDetail />
			)}
		</>
	);
};
