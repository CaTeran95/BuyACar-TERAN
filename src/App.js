// Importing State hook to update function based components:
import { useState } from "react";
// Importing my own NavBar component:
import NavBar from "./components/single/NavBar/NavBar";
// Importing Item container for body components:
import { ItemListContainer } from "./components/container/ItemListContainer/ItemListContainer";
// Importing Item Detail Container for body components:
import { ItemDetailContainer } from "./components/container/ItemDetailContainer/ItemDetailContainer";
// Importing Item Cart Container for body components:
import { ItemCartContainer } from "./components/container/ItemCartContainer/ItemCartContainer";
// Importing React-Route-DOM to navigate:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Bootstrap CSS styles:
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";

function App() {
	// PRODUCTS: State variable for number of items added to the cart.
	const [products, setProducts] = useState([]);

	// Method to update number of items in the shopping cart given the counter request:
	const addingItem = (item) => {
		const newProductArray = [...products, item]
		setProducts(newProductArray);
	};

	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<NavBar productList={products}/>
					<Routes>
						<Route path="/" element={<ItemListContainer />}/>
						<Route path="/catalog" element={<ItemListContainer />}/>
						<Route path="/catalog/category/:category" element={<ItemListContainer />}/>
						<Route path="/item/:id" element={<ItemDetailContainer addingItem={addingItem}/>}/>
						<Route path="/cart" element={<ItemCartContainer productList={products} />}/>
					</Routes>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
