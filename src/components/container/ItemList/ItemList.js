// Importing individual Item:
import { Item } from "../../single/Item/Item";

import { useContext } from "react";

import { InfoContext } from "../../../context/InfoContext";

// CSS Import:
import "./ItemList.css";

export const ItemList = () => {
	const { catalog } = useContext(InfoContext);

	return (
		<div className="itemList">
			{catalog.map((item) => (
				<Item key={item.id} item={item} />
			))}
		</div>
	);
};
