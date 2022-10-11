// Importing CartWidget to include it on the NavBar:
import { CartWidget } from "../CartWidget/CartWidget";

import { NavLink, Link } from "react-router-dom";

// Importing component CSS:
import "./NavBar.css";

function NavBar() {
	return (
		<>
			<nav>
				<h1 className="pageLogo">
					<NavLink to="/">Buy-A-Car</NavLink>
				</h1>
				<ul className="NavBarMenu">
					<li>
						<NavLink to="/catalog">Catalog</NavLink>
						<ul className="NavBarSubMenu">
							<li>
								<Link to="/catalog/category/Car">Cars</Link>
							</li>
							<li>
								<Link to="/catalog/category/SUV">SUVs</Link>
							</li>
							<li>
								<Link to="/catalog/category/Motorcycle">Motorcycles</Link>
							</li>
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
				<Link to={"/cart"} className="cartIcon">
					<CartWidget />
				</Link>
			</nav>
		</>
	);
}

export default NavBar;
