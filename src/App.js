// Importing React-Route-DOM to navigate:
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing components:
import NavBar from "./components/single/NavBar/NavBar";
import { ItemListContainer } from "./components/container/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/container/ItemDetailContainer/ItemDetailContainer";
import { ItemCartContainer } from "./components/container/ItemCartContainer/ItemCartContainer";

// Importing cart context provider:
import { CartProvider } from "./context/CartContext";

// Importing Bootstrap CSS styles:
import "bootstrap/dist/css/bootstrap.min.css";
// CSS Import:
import "./App.css";
import Message from "./components/single/Message/Message";

function App() {
	return (
		<BrowserRouter>
			<CartProvider>
				<div className="App">
					<header className="App-header">
						<NavBar />
						<Routes>
							<Route path="/" element={<ItemListContainer />} />
							<Route path="/catalog" element={<ItemListContainer />} />
							<Route
								path="/catalog/category/:category"
								element={<ItemListContainer />}
							/>
							<Route path="/item/:id" element={<ItemDetailContainer />} />
							<Route path="/cart" element={<ItemCartContainer />} />
							<Route
								path="*"
								element={
									<Message
										imgSource="https://www.svgrepo.com/show/137549/construction-excavator.svg"
										message="Looks like there is nothing by here."
										buttonText="Go back home"
										buttonLink="/"
									/>
								}
							/>
						</Routes>
					</header>
				</div>
			</CartProvider>
		</BrowserRouter>
	);
}

export default App;
