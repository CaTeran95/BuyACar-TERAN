// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";

import './ItemCart.css'
import { CartContext } from "../../../context/CartContext";

export const ItemCart = ({item}) => {
	const {removeItem} = useContext(CartContext)

	const { id, pictureUrl, brand, title, quantity, price } = item;
	return (
		<tr>
			<td>
				<button onClick={() => removeItem(id)}><FontAwesomeIcon icon={faXmark}/></button>
				<img className="carImage" src={pictureUrl} alt={`${brand} ${title}`} />
			</td>
			<td>{brand}</td>
			<td>{title}</td>
			<td>{quantity}</td>
			<td>$ {price.toLocaleString("en-US")}</td>
			<td>$ {(price * quantity).toLocaleString("en-US")}</td>
		</tr>
	);
};
