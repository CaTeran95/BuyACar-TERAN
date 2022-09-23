import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const numberOfProducts = () => {
		let count = 0;
		for (const product of products) {
			count += product.quantity;
		}
		return count;
	};

	const getTotalPrice = () => {
		let totalCart = 0;
		for (const product of products) {
			totalCart += product.quantity * product.price;
		}
		return totalCart;
	};

	const isInCart = (itemId) => {
		return products.findIndex((item) => item.id == itemId);
	};

	const addItem = (item, quantity) => {
		const index = isInCart(item.id);
		const auxArray = [...products];
		if (index > -1) {
			auxArray[index].quantity += quantity;
		} else {
			auxArray.push({ ...item, quantity });
		}
		setProducts(auxArray);
	};

	const removeItem = (itemId) => {
		const auxArray = products.filter((product) => product.id != itemId);
		setProducts(auxArray);
	};

	const clear = () => {
		setProducts([]);
	};

	return (
		<CartContext.Provider
			value={{
				products,
				isInCart,
				addItem,
				removeItem,
				clear,
				numberOfProducts,
				getTotalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
