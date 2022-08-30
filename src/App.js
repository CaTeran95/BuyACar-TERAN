// Importing State hook to update function based components:
import { useState } from "react";
// Importing my own NavBar component:
import NavBar from "./components/NavBar/NavBar";
// Importing Item container for body components:
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
// Importing Item counter to place orders in the shopping cart:
import { ItemCount } from "./components/ItemCount/ItemCount";

// Importing Bootstrap CSS styles:
import "bootstrap/dist/css/bootstrap.min.css";

import logo from "./logo.svg";
import "./App.css";

function App() {
	// PRODUCTS: State variable for number of items added to the cart.
	const [products, setProducts] = useState(0);

	// Method to update number of items in the shopping cart given the counter request:
	const addToCart = (number) => {
		setProducts(number + products);
	};

	return (
		<div className="App">
			<header className="App-header">
				<NavBar
					pop={products}
					clearPop={() => {
						setProducts(0);
					}}
				/>
				<ItemListContainer />
				<ItemCount stock={15} initial={1} onAdd={addToCart} />
			</header>
		</div>
	);
}

export default App;
