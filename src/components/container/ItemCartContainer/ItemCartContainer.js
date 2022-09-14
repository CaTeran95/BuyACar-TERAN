import { getSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../../context/CartContext";
import { ItemCart } from "../../single/ItemCart/ItemCart";

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

	const getTotalPrice = () => {
		let totalCart = 0;
		for (const product of products) {
			totalCart += product.quantity * product.price;
		}
		return totalCart.toLocaleString("en-US");
	};

	return loading ? (
		<p>Loading shopping cart...</p>
	) : (
		<div>
			{products.length == 0 ? (
				<p>
					Oops, looks like your shopping cart is empty, go to the{" "}
					<Link to={"/catalog"}>catalog</Link> and add some products.
				</p>
			) : (
				<>
					<button onClick={clear}>Clear shopping cart</button>
					<table>
						<thead>
							<tr>
								<th></th>
								<th>Brand</th>
								<th>Model</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Total price</th>
							</tr>
						</thead>
						<tbody>
							{cartProducts.map((item, index) => (
								<ItemCart key={index} item={item} />
							))}
						</tbody>
						<tfoot>
							<tr>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th>$ {getTotalPrice()}</th>
							</tr>
						</tfoot>
					</table>
				</>
			)}
		</div>
	);
};
