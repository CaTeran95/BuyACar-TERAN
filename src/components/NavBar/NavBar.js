// Importing CartWidget to include it on the NavBar:
import { CartWidget } from "../CartWidget/CartWidget";
// Importing component CSS:
import "./NavBar.css";

// This component gets:
// POP: Number or message displayed in the red badge. (No badge if is empty)
// CLEARPOP: Function to manage the cleaning event. If the cart is pressed, product variable in the main App is erased.
function NavBar({pop, clearPop}) {
	return (
		<>
            <nav>
				<h1>Rent-A-Car</h1>
				<ul className="NavBarMenu">
					<li><a href="#">Catálogo</a></li>
					<li><a href="#">Servicios</a></li>
					<li><a href="#">Oficinas</a></li>
					<li><a href="#">Contacto</a></li>
				</ul>
                <CartWidget pop={pop} clearPop={clearPop}></CartWidget>
			</nav>
		</>
	);
}

export default NavBar;
