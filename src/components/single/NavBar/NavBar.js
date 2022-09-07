// Importing CartWidget to include it on the NavBar:
import { CartWidget } from "../CartWidget/CartWidget";

import { NavLink, Link } from "react-router-dom";

// Importing component CSS:
import "./NavBar.css";

// This component gets:
// POP: Number or message displayed in the red badge. (No badge if is empty)
// CLEARPOP: Function to manage the cleaning event. If the cart is pressed, product variable in the main App is erased.

function NavBar({ pop, clearPop }) {
	return (
		<>
			<nav>
				<h1 className="pageLogo">
					<NavLink to="/">Buy-Me-A-Car</NavLink>
				</h1>
				<ul className="NavBarMenu">
					<li>
						<NavLink to="/catalog">Catalog</NavLink>
						<ul className="NavBarSubMenu">
							<li><Link to="/catalog/category/Car">Cars</Link></li>
							<li><Link  to="/catalog/category/SUV">SUV</Link></li>
						</ul>
					</li>
					<li>
						<NavLink to="/services">Services</NavLink>
					</li>
					<li>
						<NavLink to="/offices">Offices</NavLink>
					</li>
					<li>
						<NavLink to="/contact">Contact</NavLink>
					</li>
				</ul>
				<CartWidget pop={pop} clearPop={clearPop}></CartWidget>
			</nav>
		</>
	);
}

export default NavBar;
