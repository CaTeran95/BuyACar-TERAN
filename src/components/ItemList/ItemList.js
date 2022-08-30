// Importing individual Item:
import { Item } from "../Item/Item";

// CSS Import:
import "./ItemList.css";

export const ItemList = ({ data }) => {
	return (
		<div className="itemList">
			{data.map((item) => (
				<Item
					key={item.id}
					title={item.title}
					price={item.price}
					pictureUrl={item.pictureUrl}
				/>
			))}
		</div>
	);
};
