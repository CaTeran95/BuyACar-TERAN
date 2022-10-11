import { useContext } from "react";

import { InfoContext } from "../../../context/InfoContext";

// Importing ReactRouterDOM component to manage dynamic routing:
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

// CSS Import:
import "./Item.css";

export const Item = ({ item }) => {
	// Destructuration for item displaying:
	const { id, brand, title, price, pictureUrl } = item;

	const { logos } = useContext(InfoContext);

	const searchLogo = (brand) => {
		const brandLogo = logos.find((logo) => logo.brand === brand);
		return brandLogo.source;
	};

	return (
		<Link className="ItemLink" to={`/item/${id}`}>
			<div id={id} className="ItemCard">
				<img
					className="cardPicture"
					src={pictureUrl}
					alt={`${brand} ${title}`}
				/>
				<div className="cardBottom">
					<img className="cardLogo" src={searchLogo(brand)} alt={brand} />
					<div className="cardInfo">
						<p className="carTitle">{`${brand} ${title}`}</p>
						<p className="carPrice">${price.toLocaleString("en-US")}</p>
					</div>
					<button className="moreInfoButton">
						<FontAwesomeIcon icon={faInfo} />
					</button>
				</div>
			</div>
		</Link>
	);
};
