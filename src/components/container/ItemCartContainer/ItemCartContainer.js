import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useContext } from "react";

import { CartContext } from "../../../context/CartContext";
import { db } from "../../../utils/firebase";
import { CartForm } from "../../single/CartForm/CartForm";
import Message from "../../single/Message/Message";
import OrderSummary from "../../single/OrderSummary/OrderSummary";
import ItemCartTable from "../ItemCartTable/ItemCartTable";

import "./ItemCartContainer.css";

export const ItemCartContainer = () => {
	const { products, clear, getTotalPrice } = useContext(CartContext);

	const [order, setOrder] = useState('')

	const [stage, setStage] = useState("shoppingCart");

	const sendOrder = async (order) => {
		const queryRef = collection(db, "Orders");
		const orderNumber = await addDoc(queryRef, order);
		setOrder(orderNumber.id);
		console.log("orderNumber", orderNumber.id);
	};

	const submitOrder = (buyer) => {
		let order = {
			buyer: buyer,
			items: products,
			date: Timestamp.now().toDate(),
			total: getTotalPrice(),
		};
		sendOrder(order);
		console.log(order);
		clear();
	};

	const getFormInfo = () => {
		const cartForm = document.querySelectorAll(".CartForm input");
		let buyer = {};
		for (const input of cartForm) {
			buyer = { ...buyer, [input.id]: input.value };
		}
		console.log(buyer);
		submitOrder(buyer);
	};

	if (products.length == 0 && stage != 'orderConfirmation') {
		return (
			<div>
				<Message
					imgSource="https://www.svgrepo.com/show/17356/empty-cart.svg"
					message="Oops, looks like your shopping cart is empty."
					buttonText="Go to catalog"
					buttonLink="/catalog"
				></Message>
			</div>
		);
	} else {
		switch (stage) {
			case "shoppingCart":
				return (
					<div className="stage">
						<div className="itemCartContainer">
							<ItemCartTable />
						</div>
						<div>
							<OrderSummary>
								<button
									className="orderButton"
									onClick={() => {
										setStage("shippingAddress");
									}}
								>
									Select shipping address
								</button>
							</OrderSummary>
						</div>
					</div>
				);
			case "shippingAddress":
				return (
					<div className="stage">
						<div className="itemCartContainer">
							<CartForm />
						</div>
						<div>
							<OrderSummary>
								<button
									className="orderButton"
									onClick={() => {
										setStage("orderConfirmation");
										getFormInfo();
									}}
								>
									Place order
								</button>
							</OrderSummary>
						</div>
					</div>
				);
			case "orderConfirmation":
				return (
					<Message
						imgSource="https://www.svgrepo.com/show/17356/empty-cart.svg"
						message={`Your order has been processed as ${order}`}
						buttonText="Go to catalog"
						buttonLink="/catalog"
					></Message>
				);
		}
	}

	// return (
	<div>
		{products.length == 0 ? (
			<Message
				imgSource="https://www.svgrepo.com/show/17356/empty-cart.svg"
				message="Oops, looks like your shopping cart is empty."
				buttonText="Go to catalog"
				buttonLink="/catalog"
			></Message>
		) : (
			<>
				<div className="stage">
					<div className="itemCartContainer">
						{stage == "shoppingCart" ? (
							<ItemCartTable />
						) : (
							<CartForm submitOrder={submitOrder} />
						)}
					</div>
					<div>
						<OrderSummary>
							{stage == "shoppingCart" ? (
								<button
									className="orderButton"
									onClick={() => {
										setStage("shippingAddress");
									}}
								>
									Select shipping address
								</button>
							) : (
								<button
									className="orderButton"
									onClick={() => {
										getFormInfo();
										setStage("orderConfirmation");
									}}
								>
									Place order
								</button>
							)}
						</OrderSummary>
					</div>
				</div>
			</>
		)}
	</div>;
	// );
};
