import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const isInCart = (itemId) => {
		return products.findIndex((item) => item.id == itemId);
	};

	const addItem = (item, quantity) => {
		// Finding if this item is in the products list and its index:
		const index = isInCart(item.id);
		// Copying products array:
		const auxArray = [...products];
		if (index > -1) {
			// Case in which the product is already in the cart, just adding the new quantity:
			auxArray[index].quantity += quantity;
		} else {
			// Case in which the product is not yet in the cart, creating a new item in the cart:
			auxArray.push({ ...item, quantity });
		}
		// Asigning the new products array:
		setProducts(auxArray);
	};

	const removeItem = (itemId) => {
		const auxArray = products.filter(product => product.id != itemId);
		setProducts(auxArray);
	};

	const clear = () => {
		setProducts([]);
	};

	return (
		<CartContext.Provider
			value={{ products, isInCart, addItem, removeItem, clear }}
		>
			{children}
		</CartContext.Provider>
	);
};
