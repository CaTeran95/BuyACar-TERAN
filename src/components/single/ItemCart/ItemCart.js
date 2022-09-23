// Importing FontAwesome main component to generate icons:
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { faCropSimple } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";

import { CartContext } from "../../../context/CartContext";

import './ItemCart.css'

export const ItemCart = ({item}) => {
	const {removeItem} = useContext(CartContext)

	const { id, pictureUrl, brand, title, quantity, price } = item;
	return (
		<div className='tableRow itemCart'>
            <div className="itemCartDetail">
				<img className="itemCartPicture" src={pictureUrl} />
				<div className="itemInfo">
					<p className="itemBrand mainInfo"><strong>Brand:</strong> {brand}</p>
					<p className="itemModel mainInfo"><strong>Model:</strong> {title}</p>
					<p className="itemModel mainInfo"><strong>Quantity:</strong> {quantity}</p>
					{/* <p className="itemDescription">{description}</p> */}
				</div>
				<button className="deleteButton"><FontAwesomeIcon icon={faXmark} onClick={() => {removeItem(id)}} /></button>
			</div>
            <p className="itemPrice">$ {price.toLocaleString('en-US')}</p>
        </div>
	);
};
