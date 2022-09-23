import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import "./OrderSummary.css";

export default function OrderSummary({ children }) {
	const { products, getTotalPrice, clear } = useContext(CartContext);

	return (
		<div className="orderSummary">
			<button onClick={clear} className="clearCartButton">
				Empty Cart
			</button>
			<div className="productsTable">
				<div className="productsItems">
					{products.map((item) => (
						<div key={item.id} className="productRow">
							<p>{`${item.quantity} ${item.brand} ${item.title}`}</p>
							<p>${(item.price * item.quantity).toLocaleString("en-US")}</p>
						</div>
					))}
				</div>
				<div className="productsSubtotal">
					{
						<>
							<div className="productRow">
								<p>Subtotal</p>
								<p>${getTotalPrice().toLocaleString("en-US")}</p>
							</div>
							<div className="productRow">
								<p>Taxes</p>
								<p>${(getTotalPrice() * 0.19).toLocaleString("en-US")}</p>
							</div>
						</>
					}
				</div>
				<div className="productsTotal">
					{
						<div className="productRow">
							<p>TOTAL</p>
							<p>${(getTotalPrice() * 1.19).toLocaleString("en-US")}</p>
						</div>
					}
				</div>
			</div>
			{children}
		</div>
	);
}
