import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import './ItemCart.css'

export const ItemCart = ({item}) => {
	const { pictureUrl, brand, title, quantity, price } = item;
	return (
		<tr>
			<td>
				<img className="carImage" src={pictureUrl} alt={`${brand} ${title}`} />
			</td>
			<td>{brand}</td>
			<td>{title}</td>
			<td>{quantity}</td>
			<td>{price.toLocaleString("en-US")}</td>
			<td>{(price * quantity).toLocaleString("en-US")}</td>
		</tr>
	);
};
