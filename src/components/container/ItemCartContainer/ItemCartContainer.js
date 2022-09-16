import React, { useState, useEffect } from "react";
import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";
import Message from "../../single/Message/Message";
import ItemCartTable from "../ItemCartTable/ItemCartTable";

import "./ItemCartContainer.css";

export const ItemCartContainer = () => {
	const { products, clear } = useContext(CartContext);
	const [cartProducts, setCartProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setCartProducts(products);
			setLoading(false);
		}, 2000);
	}, [products]);

	return loading ? (
		<p>Loading shopping cart...</p>
	) : (
		<div>
			{products.length == 0 ? (
				<Message
					imgSource="https://www.svgrepo.com/show/17356/empty-cart.svg"
					message="Oops, looks like your shopping cart is empty."
					buttonText="Go to catalog"
					buttonLink="/catalog"
				></Message>
			) : (
				<div className="itemCartContainer">
					<button onClick={clear} className="clearCartButton">
						Empty Cart
					</button>
					<ItemCartTable></ItemCartTable>
				</div>
			)}
		</div>
	);
};
