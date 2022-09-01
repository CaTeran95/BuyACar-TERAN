// Importing State hook to update function based components:
import { useState } from "react";
// Importing my own NavBar component:
import NavBar from "./components/single/NavBar/NavBar";
// Importing Item container for body components:
import { ItemListContainer } from "./components/container/ItemListContainer/ItemListContainer";
// Importing Item counter to place orders in the shopping cart:
// import { ItemCount } from "./components/single/ItemCount/ItemCount";
// Importing Item Detail Container for body components:
import { ItemDetailContainer } from "./components/container/ItemDetailContainer/ItemDetailContainer";

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
				{/* <ItemCount stock={15} initial={1} onAdd={addToCart} /> */}
				<ItemDetailContainer/>
			</header>
		</div>
	);
}

export default App;
