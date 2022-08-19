import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";

function NavBar() {
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
                <CartWidget pop={5}></CartWidget>
			</nav>
		</>
	);
}

export default NavBar;
