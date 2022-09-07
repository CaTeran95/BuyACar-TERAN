// Importing ReactRouterDOM component to manage dynamic routing:
import { Link } from "react-router-dom";

// CSS Import:
import "./Item.css";

export const Item = ({ item }) => {
	// Destructuration for item displaying:
	const { id, category, brand, title, price, pictureUrl } = item;

	return (
		<Link className="ItemLink" to={`/item/${id}`}>
			<div id={id} className="ItemCard">
				<img className="carPicture" src={pictureUrl} alt={`${brand} ${title}`} />
				<p className="carTitle">{`${brand} ${title}`}</p>
				<p className="carPrice">${price.toLocaleString("en-US")}</p>
				{/* Buttons for Booking and Detail options */}
				<button className="moreInfoButton">Information</button>
				<button className="bookingButton">Booking</button>
			</div>
		</Link>
	);
};
