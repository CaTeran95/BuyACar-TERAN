// Importing individual Item:
import { Item } from "../../single/Item/Item";

// CSS Import:
import "./ItemList.css";

export const ItemList = ({ data }) => {
	return (
		<div className="itemList">
			{data.map((item) => (
				<Item
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
};
