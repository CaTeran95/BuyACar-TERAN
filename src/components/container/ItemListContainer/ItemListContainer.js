// Importing hooks to keep variables and perform duty cycle control:
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
// Importing component to list items:
import { ItemList } from "../ItemList/ItemList";
// Importing context to get information for catalog
import { InfoContext } from "../../../context/InfoContext";

// CSS Import:
import "./ItemListContainer.css";

export const ItemListContainer = () => {
	// Receiving functions to load page information from InfoContext:
	const { catalog, getLogos, getCatalog } = useContext(InfoContext);

	// Variable where the required category name is saved to get related items list:
	const { filter, value } = useParams();

	// GETTING THE LIST OF PRODUCTS FROM FIREBASE:

	useEffect(() => {
		getLogos();
	}, []);

	useEffect(() => {
		getCatalog(filter, value);
	}, [filter, value]);

	return (
		<div className="itemListContainer">
			{(catalog.length === 0) ? <p>Loading...</p> : <ItemList /> }
		</div>
	);
};
